from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "juan-ignacio-cuevas-cv-en.pdf"

PAGE_WIDTH, PAGE_HEIGHT = letter
MARGIN_X = 0.42 * inch
MARGIN_TOP = 0.42 * inch
MARGIN_BOTTOM = 0.32 * inch

styles = getSampleStyleSheet()

name_style = ParagraphStyle(
    "Name",
    parent=styles["Title"],
    fontName="Times-Bold",
    fontSize=26,
    leading=29,
    alignment=TA_CENTER,
    spaceAfter=4,
)
contact_style = ParagraphStyle(
    "Contact",
    parent=styles["Normal"],
    fontName="Times-Roman",
    fontSize=10,
    leading=12.6,
    alignment=TA_CENTER,
)
summary_style = ParagraphStyle(
    "Summary",
    parent=styles["Normal"],
    fontName="Times-Italic",
    fontSize=10.9,
    leading=14.9,
    spaceAfter=7,
)
section_style = ParagraphStyle(
    "Section",
    parent=styles["Heading2"],
    fontName="Times-Bold",
    fontSize=12.8,
    leading=14.8,
    spaceBefore=7,
    spaceAfter=2,
)
company_style = ParagraphStyle(
    "Company",
    parent=styles["Normal"],
    fontName="Times-Bold",
    fontSize=11.2,
    leading=12.8,
)
role_style = ParagraphStyle(
    "Role",
    parent=styles["Normal"],
    fontName="Times-Roman",
    fontSize=10.5,
    leading=12.8,
)
right_bold_style = ParagraphStyle(
    "RightBold",
    parent=company_style,
    alignment=TA_RIGHT,
)
right_italic_style = ParagraphStyle(
    "RightItalic",
    parent=role_style,
    fontName="Times-Italic",
    alignment=TA_RIGHT,
)
body_style = ParagraphStyle(
    "Body",
    parent=styles["Normal"],
    fontName="Times-Roman",
    fontSize=10.4,
    leading=13,
)
bullet_style = ParagraphStyle(
    "Bullet",
    parent=body_style,
    leftIndent=17,
    firstLineIndent=-9,
    spaceAfter=1.7,
)
certificate_style = ParagraphStyle(
    "Certificate",
    parent=body_style,
    fontName="Times-Bold",
)
date_style = ParagraphStyle(
    "Date",
    parent=body_style,
    fontName="Times-Italic",
    alignment=TA_RIGHT,
)


def section(title: str):
    heading = Table([[Paragraph(title, section_style)]], colWidths=[PAGE_WIDTH - 2 * MARGIN_X])
    heading.setStyle(
        TableStyle(
            [
                ("LEFTPADDING", (0, 0), (-1, -1), 5),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
                ("LINEBELOW", (0, 0), (-1, -1), 0.8, colors.black),
            ]
        )
    )
    return heading


def job(company: str, role: str, location: str, dates: str, bullets: list[str]):
    header = Table(
        [
            [Paragraph(company, company_style), Paragraph(location, right_bold_style)],
            [Paragraph(role, role_style), Paragraph(dates, right_italic_style)],
        ],
        colWidths=[5.25 * inch, 2.05 * inch],
    )
    header.setStyle(
        TableStyle(
            [
                ("LEFTPADDING", (0, 0), (-1, -1), 5),
                ("RIGHTPADDING", (0, 0), (-1, -1), 5),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ]
        )
    )
    bullet_paragraphs = [Paragraph(f"- {item}", bullet_style) for item in bullets]
    return KeepTogether([header, Spacer(1, 3), *bullet_paragraphs, Spacer(1, 5)])


def certificate(name: str, issuer: str, date: str):
    row = Table(
        [
            [Paragraph(name, certificate_style), Paragraph(date, date_style)],
            [Paragraph(f"-  {issuer}", body_style), ""],
        ],
        colWidths=[6.45 * inch, 0.85 * inch],
    )
    row.setStyle(
        TableStyle(
            [
                ("LEFTPADDING", (0, 0), (-1, -1), 5),
                ("RIGHTPADDING", (0, 0), (-1, -1), 5),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 1.2),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ]
        )
    )
    return row


def build_pdf():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc = BaseDocTemplate(
        str(OUTPUT),
        pagesize=letter,
        leftMargin=MARGIN_X,
        rightMargin=MARGIN_X,
        topMargin=MARGIN_TOP,
        bottomMargin=MARGIN_BOTTOM,
        title="Juan Ignacio Cuevas - CV - English",
        author="Juan Ignacio Cuevas",
        subject="Full Stack Developer Resume",
    )
    frame = Frame(
        MARGIN_X,
        MARGIN_BOTTOM,
        PAGE_WIDTH - 2 * MARGIN_X,
        PAGE_HEIGHT - MARGIN_TOP - MARGIN_BOTTOM,
        leftPadding=0,
        rightPadding=0,
        topPadding=0,
        bottomPadding=0,
    )
    doc.addPageTemplates([PageTemplate(id="resume", frames=[frame])])

    story = [
        Paragraph("Juan Ignacio Cuevas", name_style),
        Paragraph(
            'Tandil, Buenos Aires  |  <link href="https://www.linkedin.com/in/juan-ignacio-cuevas-348891284" color="#1468b3">linkedin.com/in/juan-ignacio-cuevas</link>  |  +54 9 2281 416325',
            contact_style,
        ),
        Spacer(1, 5),
        Table([[""]], colWidths=[PAGE_WIDTH - 2 * MARGIN_X], rowHeights=[1], style=[("LINEABOVE", (0, 0), (-1, -1), 0.8, colors.black)]),
        Spacer(1, 5),
        Paragraph(
            "Full Stack Developer with hands-on experience building internal tools with React, Supabase, SQL, and RPCs. I combine development with process analysis to understand real operational needs, automate repetitive work, and deliver clear, reliable solutions. I am committed, collaborative, and driven by continuous learning.",
            summary_style,
        ),
        section("PROFESSIONAL EXPERIENCE"),
        Spacer(1, 5),
        job(
            "Grupo KELSOFT",
            "Full Stack Developer - React & Supabase | Improvement Team - Catalog Project",
            "Tandil, Buenos Aires",
            "Aug 2025 - Present",
            [
                "Build internal tools that streamline workflows and automate operational tasks for the Catalog Project.",
                "Develop frontend features in React and work with Supabase, SQL, and RPCs to model business logic and manage information.",
                "Contribute to the ideation and implementation of new solutions for the team.",
            ],
        ),
        job(
            "Grupo KELSOFT",
            "E-Commerce Analyst",
            "Tandil, Buenos Aires",
            "Apr 2025 - Present",
            [
                "Review product listings.",
                "Ensure content quality and consistency.",
                "Identify errors and inconsistencies.",
                "Ensure compliance with quality and productivity standards.",
                "Identify improvement opportunities and propose adjustments to processes, tools, and methodologies.",
                "Contribute to solutions that optimize tasks and reduce errors.",
            ],
        ),
        section("EDUCATION"),
        Spacer(1, 4),
        Table(
            [
                [Paragraph("National University of Central Buenos Aires (UNICEN)", company_style), Paragraph("Tandil, Buenos Aires", right_bold_style)],
                [Paragraph("Systems Engineering", role_style), Paragraph("Jan 2020 - In progress", right_italic_style)],
            ],
            colWidths=[5.25 * inch, 2.05 * inch],
            style=[
                ("LEFTPADDING", (0, 0), (-1, -1), 5),
                ("RIGHTPADDING", (0, 0), (-1, -1), 5),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ],
        ),
        section("CERTIFICATIONS"),
        Spacer(1, 3),
        certificate("AI for Developers", "IT School - Educacion IT", "Apr 2026"),
        certificate("Python Certification", "IT School - Educacion IT", "Nov 2025"),
        certificate("Process Optimization and Improvement with AI Tools", "IT School - Educacion IT", "Aug 2025"),
        certificate("Git and GitHub Fundamentals", "Desafio Latam", "May 2024"),
        certificate("A Day as a Data Analyst", "Desafio Latam", "May 2024"),
        section("SKILLS"),
        Spacer(1, 4),
        Paragraph("- React, Supabase, Java, Python, PHP, PostgreSQL, MySQL, SQL, Scrum, Git & GitHub, JIRA, Asana, Slack, Linux, and Visual Studio Code", bullet_style),
        Paragraph("- Spanish: Native | English: Intermediate", bullet_style),
    ]
    doc.build(story)
    print(OUTPUT)


if __name__ == "__main__":
    build_pdf()
