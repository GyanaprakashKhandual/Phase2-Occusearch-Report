# OcuSearch Phase 2 - Testing Report Dashboard

A comprehensive, dynamic web-based testing report platform for the OcuSearch mobile application, providing unified access to bug reports, performance metrics, and API test results.

## Overview

This project delivers a professional dashboard experience for accessing and analyzing test reports with real-time data synchronization, interactive filtering, and responsive design across all devices.

## Features

- **Bug Report Module** - Detailed bug tracking with priority levels and status management
- **Performance Test Report** - Real-time performance metrics and analytics
- **API Test Report** - Comprehensive API testing results and endpoint validation
- **Advanced Filtering** - GitHub-style dropdown filters on all report columns
- **Real-time Data** - Integration with Google Sheets and Grafana for live updates
- **Comment System** - Collaborative feedback on each report entry
- **Dark Mode** - Full dark theme support for better UX
- **Fully Responsive** - Optimized for mobile, tablet, and desktop views
- **Sticky Headers** - Fixed table headers for seamless scrolling
- **Keyboard Shortcuts** - Quick navigation with keyboard support

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Icons**: SVG Path Stroke
- **Animation**: GSAP (GreenSock Animation Platform)
- **Data Format**: JSON
- **Integrations**: Google Sheets, Grafana
- **Styling**: CSS Variables, Responsive Design

## Project Structure

```
occusearch-phase-2/
├── index.html
├── style.css
├── script.js
├── bug-sprint-1.html
├── api-sprint-1.html
├── performance-sprint-1.html
├── bug-sprint-2.html
├── api-sprint-2.html
├── performance-sprint-2.html
├── data/
│   ├── sprint.one.bug.data.json
│   ├── sprint.one.api.data.json
│   └── sprint.one.performance.data.json
└── README.md
```

## Installation

1. Clone the repository

```bash
git clone https://github.com/GyanaprakashKhandual/Phase2-Occusearch-Report.git
cd Phase2-Occusearch-Report
```

2. No dependencies required - pure vanilla JavaScript
3. Open `index.html` in your browser

## Usage

### Accessing Reports

- Navigate through the sidebar to select Sprint 1 or Sprint 2
- Click on Bug Report, API Test Report, or Performance Report
- Use the breadcrumb navigation to track your location

### Filtering Data

- Click any column header to open the filter dropdown
- Type to search for specific values
- Press Enter or click to apply filter
- Click "Clear" button to remove individual filters

### Keyboard Shortcuts

- `Enter` - Apply filter
- `Esc` - Close dropdown

### Theme Toggle

- Click the theme icon in the top-right to switch between light and dark modes
- Preference is saved to localStorage

## Data Format

JSON data structure for bug reports:

```json
{
  "bugId": "BUG-1012",
  "module": "Login",
  "bugType": "Functional",
  "bugDescription": "User can log in without password",
  "bugRequirement": "System should validate mandatory fields",
  "bugPriority": "High",
  "bugStatus": "Open",
  "bugReportedBy": "https://profile-image-url.jpg",
  "comment": "Reproducible on all browsers"
}
```

## Integration

### Google Sheets

Connect your Google Sheets for real-time bug data updates by modifying the fetch endpoint in `script.js`

### Grafana

Performance metrics are pulled from Grafana dashboards for live analytics visualization

## Color Theme

- **Light Mode**: Clean white background with dark text
- **Dark Mode**: Dark background (#0a0a0a) with white text
- **Accent Colors**: Blue (#0070f3), Green (#10b981)

## Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight vanilla JavaScript (no frameworks)
- Optimized CSS with CSS variables
- Efficient JSON data loading
- Sticky headers for smooth scrolling
- Responsive image optimization

## Future Enhancements

- Export reports to PDF/CSV
- Advanced analytics dashboard
- User role management
- Automated report scheduling
- Integration with CI/CD pipelines

## License

MIT License - See LICENSE file for details

## Contact

For questions or support, contact the development team at [gyanaprakashkhnadual@gmail.com]

---

**Version**: 2.0  
**Last Updated**: December 2025
**Status**: Active Development
