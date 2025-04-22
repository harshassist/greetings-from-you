export interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories: string[];
}

export const categories: Category[] = [
  {
    id: "teaching-faculty",
    name: "Teaching & Faculty",
    icon: "📘",
    subcategories: [
      "Primary/Elementary Teacher",
      "Secondary School Teacher",
      "Higher Secondary Teacher",
      "College/University Faculty",
      "Assistant Professor",
      "Associate Professor",
      "Guest/Visiting Faculty",
      "Special Education Teacher",
      "Remedial/Bridge Course Instructor",
      "Vocational Trainer"
    ]
  },
  {
    id: "k12-education",
    name: "K–12 Education",
    icon: "🎓",
    subcategories: [
      "Kindergarten Teacher",
      "Subject Teacher (Math, Science, Social Studies, etc.)",
      "Computer/IT Teacher",
      "Language Teacher",
      "Arts & Music Teacher",
      "Physical Education (PE) Teacher",
      "Co-curricular Coordinator",
      "Class Coordinator",
      "School Counselor",
      "Activity Incharge"
    ]
  },
  {
    id: "administration",
    name: "Administration",
    icon: "🏫",
    subcategories: [
      "Principal / Vice Principal",
      "Academic Coordinator",
      "Registrar",
      "School Operations Manager",
      "Admissions Officer",
      "Compliance Officer",
      "Exam Controller",
      "Office Admin",
      "Transport Incharge",
      "Hostel Administrator"
    ]
  },
  {
    id: "edtech",
    name: "EdTech",
    icon: "💻",
    subcategories: [
      "Instructional Designer",
      "eLearning Content Developer",
      "LMS Administrator",
      "EdTech Product Manager",
      "UI/UX Designer",
      "Online Tutor",
      "Content Curator",
      "Course Reviewer",
      "Virtual Class Moderator",
      "AI-Integrated Learning Specialist"
    ]
  },
  {
    id: "research",
    name: "Research",
    icon: "🔬",
    subcategories: [
      "Research Associate",
      "Research Assistant",
      "Postdoctoral Researcher",
      "Junior Research Fellow (JRF)",
      "Senior Research Fellow (SRF)",
      "Data Analyst",
      "Lab Assistant",
      "Scientific Officer",
      "Research Project Manager"
    ]
  },
  {
    id: "student-services",
    name: "Student Services",
    icon: "🧑‍🎓",
    subcategories: [
      "Academic Advisor",
      "Career Counselor",
      "Student Support Officer",
      "Mental Health Counselor",
      "Mentoring Coordinator",
      "Student Life Coordinator",
      "Placement Cell Member",
      "Enrolment Advisor",
      "Alumni Relations Officer"
    ]
  },
  {
    id: "human-resources",
    name: "Human Resources",
    icon: "👥",
    subcategories: [
      "Academic Recruiter",
      "HR Executive",
      "Talent Acquisition Specialist",
      "Employee Relations Manager",
      "HR Business Partner",
      "Payroll & Compliance Officer",
      "Training & Development Executive",
      "Onboarding Specialist",
      "HR Operations Associate"
    ]
  },
  {
    id: "executive",
    name: "Executive",
    icon: "👔",
    subcategories: [
      "Dean",
      "Director",
      "Provost",
      "Vice Chancellor",
      "Chief Academic Officer",
      "Strategy Head",
      "Institutional Consultant",
      "Governing Board Member"
    ]
  },
  {
    id: "library-sciences",
    name: "Library Sciences",
    icon: "📚",
    subcategories: [
      "School Librarian",
      "University Librarian",
      "Digital Resources Specialist",
      "Cataloging Officer",
      "Archivist",
      "Metadata Specialist",
      "Library Assistant",
      "Journal/Periodicals Manager",
      "E-Library Coordinator"
    ]
  },
  {
    id: "it-support",
    name: "IT & Technical Support",
    icon: "🖥️",
    subcategories: [
      "IT Administrator",
      "Network & Server Engineer",
      "Audio-Visual Technician",
      "LMS Technical Support",
      "Database Administrator",
      "Software Engineer",
      "Tech Support Executive",
      "Cybersecurity Officer",
      "ERP Coordinator"
    ]
  },
  {
    id: "content-curriculum",
    name: "Content & Curriculum Design",
    icon: "📝",
    subcategories: [
      "Curriculum Developer",
      "Content Writer",
      "Question Bank Designer",
      "Learning Outcomes Specialist",
      "Textbook Author",
      "Assessment Designer",
      "SME",
      "Pedagogical Expert",
      "Reviewer / Proofreader"
    ]
  },
  {
    id: "marketing",
    name: "Marketing & Outreach",
    icon: "📣",
    subcategories: [
      "Digital Marketing Executive",
      "SEO/SEM Specialist",
      "Social Media Manager",
      "Outreach Coordinator",
      "Event & Admissions Planner",
      "Brand Manager",
      "Content Marketer",
      "Community Engagement Lead"
    ]
  },
  {
    id: "finance-accounting",
    name: "Finance & Accounting",
    icon: "💰",
    subcategories: [
      "School/College Accountant",
      "Budgeting Analyst",
      "Fees & Dues Officer",
      "Grants Administrator",
      "Financial Controller",
      "Payroll Officer",
      "Procurement Executive",
      "Audit Officer"
    ]
  },
  {
    id: "support-staff",
    name: "Support & Non-Teaching Staff",
    icon: "🛠️",
    subcategories: [
      "Physical Education Instructor",
      "School Bus Driver",
      "Campus Gardener",
      "Security Guard",
      "Lab Assistant",
      "Receptionist",
      "Hostel Warden",
      "Housekeeping Staff",
      "Maintenance Technician",
      "School Counselor (Mental Health)",
      "Event Helper"
    ]
  }
]
