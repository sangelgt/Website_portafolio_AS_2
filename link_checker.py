import os
import csv
import requests
from bs4 import BeautifulSoup

def audit_links(start_path='public'):
    """
    Audits all links in HTML files in a given directory and generates a CSV report.
    """
    report_data = [['Página', 'Enlace', 'Estado']]
    html_files = [os.path.join(root, file) for root, _, files in os.walk(start_path) for file in files if file.endswith('.html')]

    for html_file in html_files:
        with open(html_file, 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f, 'html.parser')
            for link in soup.find_all('a'):
                href = link.get('href')
                if href:
                    if href.startswith('http'):
                        status = check_external_link(href)
                    else:
                        status = check_internal_link(href, start_path, html_file)
                    report_data.append([html_file, href, status])

    with open('AUDIT_REPORT.csv', 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerows(report_data)

def check_external_link(url):
    """
    Checks if an external link is live by making a HEAD request.
    """
    try:
        response = requests.head(url, timeout=5)
        return 'En uso' if response.status_code == 200 else 'Desconectada'
    except requests.RequestException:
        return 'Desconectada'

def check_internal_link(href, start_path, current_file):
    """
    Checks if an internal link points to an existing file.
    """
    if href.startswith('#'):
        return 'Existente'

    # Normalize the path
    if href.startswith('./'):
        href = href[2:]

    # Construct the absolute path
    abs_path = os.path.join(os.path.dirname(current_file), href)

    return 'Existente' if os.path.exists(abs_path) else 'Desconectada'


if __name__ == '__main__':
    audit_links()
