# Requirements Document

## Introduction

This feature adds a footer section to the portfolio website. The footer appears at the bottom of the single-page layout and serves two purposes: it provides quick navigation links to each major section of the page, and it exposes contact information (GitHub, LinkedIn, and email). The footer uses a scroll-triggered fade-up animation — when the user scrolls down to where the footer becomes visible, the footer fades in from below.

The project is a React + TypeScript + Vite portfolio using Tailwind CSS and shadcn/ui components. The main page component is `SplineSceneBasic` inside `components/ui/demo.tsx`.

## Glossary

- **Footer**: The bottom-most section of the portfolio page, containing navigation links and contact information.
- **Nav_Link**: An anchor element inside the footer that scrolls the page to a named section when clicked.
- **Contact_Link**: An anchor element that opens an external contact destination (GitHub profile, LinkedIn profile, or email client).
- **Fade_Up_Animation**: A CSS transition that begins with the element translated downward and invisible (`opacity: 0; transform: translateY(40px)`) and ends with it in its natural position and fully opaque (`opacity: 1; transform: translateY(0)`).
- **IntersectionObserver**: The browser API used to detect when the Footer enters the viewport and trigger the Fade_Up_Animation.
- **Portfolio_Site**: The React + TypeScript + Vite single-page portfolio application.

---

## Requirements

### Requirement 1: Footer Placement

**User Story:** As a visitor, I want a footer at the bottom of the page, so that I always know I have reached the end of the content and can quickly navigate or get in touch.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL render the Footer as the last child element inside the page root, after the projects section.
2. THE Footer SHALL span the full width of the viewport.
3. THE Footer SHALL be visually separated from the projects section above it by a top border or divider line.

---

### Requirement 2: Footer Navigation Links

**User Story:** As a visitor, I want navigation links inside the footer, so that I can jump to any section of the page without scrolling back to the top.

#### Acceptance Criteria

1. THE Footer SHALL contain exactly five Nav_Links with the labels: **Home**, **Skills**, **About**, **Projects**, and **Contact**.
2. WHEN a visitor clicks the "Home" Nav_Link, THE Portfolio_Site SHALL scroll the viewport to the element with `id="home"`.
3. WHEN a visitor clicks the "Skills" Nav_Link, THE Portfolio_Site SHALL scroll the viewport to the element with `id="skill"`.
4. WHEN a visitor clicks the "About" Nav_Link, THE Portfolio_Site SHALL scroll the viewport to the element with `id="about"`.
5. WHEN a visitor clicks the "Projects" Nav_Link, THE Portfolio_Site SHALL scroll the viewport to the element with `id="projects"`.
6. WHEN a visitor clicks the "Contact" Nav_Link, THE Portfolio_Site SHALL scroll the viewport to the Footer's contact sub-section.
7. THE Footer SHALL render the five Nav_Links in a single horizontal row on viewports wider than 640 px.
8. THE Footer SHALL render the five Nav_Links stacked vertically or wrapped on viewports 640 px wide or narrower.

---

### Requirement 3: Contact Information

**User Story:** As a visitor, I want GitHub, LinkedIn, and email contact links in the footer, so that I can reach out to or follow the portfolio owner through my preferred channel.

#### Acceptance Criteria

1. THE Footer SHALL contain a Contact_Link to the owner's GitHub profile that opens in a new browser tab.
2. THE Footer SHALL contain a Contact_Link to `https://www.linkedin.com/in/shikhar-verma-72a732325/` that opens in a new browser tab.
3. THE Footer SHALL contain a Contact_Link using `mailto:shikharverma950@gmail.com` that opens the visitor's default email client.
4. WHEN a Contact_Link opens an external destination, THE Footer SHALL set `rel="noopener noreferrer"` on that anchor element.
5. THE Footer SHALL display a recognizable icon alongside each Contact_Link (GitHub icon, LinkedIn icon, and email/envelope icon).

---

### Requirement 4: Scroll-Triggered Fade-Up Animation

**User Story:** As a visitor, I want the footer to animate in smoothly as I scroll down to it, so that the page feels polished and the footer does not appear abruptly.

#### Acceptance Criteria

1. WHILE the Footer is outside the visible viewport, THE Footer SHALL be rendered with `opacity: 0` and `transform: translateY(40px)`.
2. WHEN the Footer enters the visible viewport (as detected by the IntersectionObserver), THE Portfolio_Site SHALL apply an `in-view` class to the Footer element.
3. WHILE the `in-view` class is applied to the Footer, THE Footer SHALL transition to `opacity: 1` and `transform: translateY(0)`.
4. THE Footer SHALL complete the Fade_Up_Animation within 600 ms of the `in-view` class being applied.
5. THE Portfolio_Site SHALL use `transition-timing-function: cubic-bezier(0.2, 0.9, 0.3, 1)` for the Fade_Up_Animation, consistent with the existing `.fade-item` pattern used by other sections.
6. IF the IntersectionObserver API is unavailable in the visitor's browser, THEN THE Footer SHALL be displayed fully visible (opacity: 1, no transform offset) as a fallback.
