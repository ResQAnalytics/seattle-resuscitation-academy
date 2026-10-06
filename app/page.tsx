"use client"

import React, { useState } from 'react';

const ResuscitationAcademyApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState<any>(null);

  // NOTE: Registration link left blank — wire this up once you have a live link.
  const REGISTRATION_LINK = '';
  // Reusing the same feedback / project submission forms as the other RA apps per your instruction.
  const SURVEY_MONKEY_FEEDBACK = 'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=Rlxec0Q5vkWEZXtX_fuThTpgjiprvlVPgo57ut0ikepUMkRCRlYwNFVURzY4VVVFWElWUURKRFVRNy4u';
  const PROJECT_SUBMISSION = 'https://forms.office.com/Pages/ResponsePage.aspx?id=Rlxec0Q5vkWEZXtX_fuThTpgjiprvlVPgo57ut0ikepUQjg2SEU5OUY3NEJKOUFYUE1INkJXTEpEUC4u';

  const faculty = [
    {
      name: 'Ann Doll',
      title: 'Opening Remarks & Overview',
      credentials: '',
      specialty: 'EMS Leadership',
      bio: 'Ann Doll opens the Resuscitation Academy Seattle with a welcome and overview of the two-day training program, setting the tone for the intensive curriculum ahead.',
      image: null,
      initials: 'AD',
      linkedin: null
    },
    {
      name: 'Chief Harold Scoggins',
      title: 'Welcome — Seattle Fire Department',
      credentials: 'Chief',
      specialty: 'Fire & EMS Leadership',
      bio: 'Chief Harold Scoggins welcomes attendees on behalf of the Seattle Police Department Metropolitan Police Department and the Seattle Fire Department, bringing leadership perspective to the opening of the Academy.',
      image: null,
      initials: 'HS',
      linkedin: null
    },
    {
      name: 'Dr. Andy McCoy',
      title: '10 Steps & Time/Quality, Cutting Edge Solutions, Physician Breakout Lead',
      credentials: 'MD',
      specialty: 'Emergency Medicine & Resuscitation Science',
      bio: 'Dr. Andy McCoy presents on the 10 Steps to Improve OHCA Survival and the critical relationship between time and quality. He also covers Cutting Edge Solutions (AI, VFR, and new AED technology), leads the Day 2 Physician Breakout, and facilitates the closing Q&A session.',
      image: null,
      initials: 'AM',
      linkedin: null
    },
    {
      name: 'Dr. Peter Kudenchuk',
      title: 'Science of CPR: Overview & Fundamentals, Middle Breakout Lead',
      credentials: 'MD',
      specialty: 'Resuscitation Science & Emergency Medicine',
      bio: 'Dr. Peter Kudenchuk presents the Science of CPR, covering foundational and advanced principles of effective resuscitation, followed by a dedicated Q&A. He also leads the Advanced Science breakout rotation on Day 1.',
      image: null,
      initials: 'PK',
      linkedin: null
    },
    {
      name: 'Julie Buckingham',
      title: 'T-CPR Overview & Q&A, Day 2 T-CPR Track Lead',
      credentials: '',
      specialty: 'Telecommunicator CPR (T-CPR)',
      bio: 'Julie Buckingham leads the T-CPR Overview and Q&A session, covering dispatcher-assisted CPR protocols and implementation strategies. On Day 2, she leads the full-day T-CPR track for dispatchers.',
      image: null,
      initials: 'JB',
      linkedin: null
    },
    {
      name: 'Jonathan Larsen',
      title: 'HP-CPR Overview, Day 2 HP-CPR Train-the-Trainer Lead',
      credentials: '',
      specialty: 'High-Performance CPR & EMS Training',
      bio: 'Jonathan Larsen leads the HP-CPR Overview session, introducing high-performance CPR fundamentals ahead of the Seattle Fire Department demonstration. On Day 2, he leads the full-day HP-CPR Train-the-Trainer track.',
      image: null,
      initials: 'JL',
      linkedin: null
    },
    {
      name: 'Dr. Catherine Counts',
      title: 'QI Basics & Q&A',
      credentials: 'PhD',
      specialty: 'Quality Improvement & EMS Research',
      bio: 'Dr. Catherine Counts presents QI Basics, covering the fundamentals of quality improvement in cardiac arrest response, followed by an interactive Q&A session.',
      image: null,
      initials: 'CC',
      linkedin: null
    },
    {
      name: 'Dr. Bryan McNeilly',
      title: 'Debriefing, Greenhouse Breakout Co-Lead',
      credentials: 'MD',
      specialty: 'Emergency Medicine & Debriefing',
      bio: 'Dr. Bryan McNeilly leads the Debriefing session following lunch on Day 1, covering structured approaches to post-event debriefing. He also co-leads the Greenhouse breakout rotation alongside Laura Miccile.',
      image: null,
      initials: 'BM',
      linkedin: null
    },
    {
      name: 'Dr. Lance Jobe',
      title: 'RA Alumni: The Real World',
      credentials: 'MD',
      specialty: 'EMS Alumni Perspective',
      bio: 'Dr. Lance Jobe shares his real-world experience as a Resuscitation Academy alumnus, offering practical insight into implementing resuscitation improvement projects after completing the program.',
      image: null,
      initials: 'LJ',
      linkedin: null
    },
    {
      name: 'Ben Miller-Todd',
      title: 'RA Alumni: The Real World',
      credentials: '',
      specialty: 'EMS Alumni Perspective',
      bio: 'Ben Miller-Todd shares his experience as a Resuscitation Academy alumnus during the RA Alumni panel, discussing lessons learned from applying Academy training in the field.',
      image: null,
      initials: 'BT',
      linkedin: null
    },
    {
      name: 'Scott Helle',
      title: 'RA Alumni: The Real World',
      credentials: '',
      specialty: 'Rural EMS & Alumni Perspective',
      bio: 'Scott Helle is a Rural Project Manager for EMS with the Kentucky Office of Rural Health at the University of Kentucky Center of Excellence in Rural Health. He supports statewide efforts to improve outcomes from out-of-hospital cardiac arrest through education, data collaboration, and partnerships, including the Kentucky EMS Leadership Academy. He shares his Resuscitation Academy alumni experience during the Day 1 panel.',
      image: null,
      initials: 'SH',
      linkedin: null
    },
    {
      name: 'Dr. Nick Johnson',
      title: 'Front Breakout Lead — Community & Law Enforcement',
      credentials: 'MD',
      specialty: 'Emergency Medicine & Community Engagement',
      bio: 'Dr. Nick Johnson leads the Community & Law Enforcement breakout rotation, addressing strategies for community activation, bystander CPR, and collaboration with law enforcement in cardiac arrest response.',
      image: null,
      initials: 'NJ',
      linkedin: null
    },
    {
      name: 'Dr. Jessie Wall',
      title: 'Back Breakout Lead — Pediatrics',
      credentials: 'MD',
      specialty: 'Pediatric Emergency Medicine',
      bio: 'Dr. Jessie Wall leads the Pediatrics breakout rotation, covering pediatric-specific considerations and best practices in cardiac arrest resuscitation.',
      image: null,
      initials: 'JW',
      linkedin: null
    },
    {
      name: 'Laura Miccile',
      title: 'Greenhouse Breakout Co-Lead — Post-ROSC Care',
      credentials: '',
      specialty: 'Post-ROSC Care',
      bio: 'Laura Miccile co-leads the Post-ROSC Care breakout rotation in the Greenhouse room alongside Dr. Bryan McNeilly, covering post-cardiac-arrest care strategies and best practices.',
      image: null,
      initials: 'LM',
      linkedin: null
    },
    {
      name: 'Tegan Hampton',
      title: 'RA Resources',
      credentials: '',
      specialty: 'Resuscitation Academy Resources',
      bio: 'Tegan Hampton presents on RA Resources during Day 2, guiding attendees through the tools, toolkits, and ongoing support available through the Resuscitation Academy network.',
      image: null,
      initials: 'TH',
      linkedin: null
    },
    {
      name: 'Michael Arbuck',
      title: 'Thoughts From the Other Side',
      credentials: '',
      specialty: 'Community & Survivor Perspective',
      bio: 'Michael Arbuck shares "Thoughts From the Other Side," bringing a powerful personal perspective to the Academy that grounds the training in the real-world impact of cardiac arrest response.',
      image: null,
      initials: 'MA',
      linkedin: null
    },
    {
      name: 'Dr. Tom Rea',
      title: 'Putting It All Together',
      credentials: 'MD',
      specialty: 'Resuscitation Science & EMS Systems',
      bio: 'Dr. Tom Rea leads the closing "Putting It All Together" session, synthesizing the two days of training into an actionable framework for improving cardiac arrest response systems.',
      image: null,
      initials: 'TR',
      linkedin: null
    },
  ];

  const agendaItems = [
    // ─── DAY 1 – OCTOBER 12 | GENERAL SESSION & BREAKOUTS ──────────────────
    {
      day: 1,
      time: '8:00 AM – 8:20 AM',
      title: 'Registration and Light Breakfast',
      speaker: '',
      description: 'Check in and receive conference materials. Network with fellow attendees over coffee and light refreshments.',
      type: 'registration'
    },
    {
      day: 1,
      time: '8:20 AM – 8:30 AM',
      title: 'Welcome',
      speaker: 'SPD MPD & Chief Harold Scoggins',
      description: 'Welcome to the Resuscitation Academy Seattle on behalf of the Seattle Police Department Metropolitan Police Department and the Seattle Fire Department.',
      type: 'Opening'
    },
    {
      day: 1,
      time: '8:30 AM – 8:40 AM',
      title: 'Opening Remarks & Overview',
      speaker: 'Ann Doll',
      description: 'Welcome and overview of the two-day Resuscitation Academy Seattle training program.',
      type: 'Opening'
    },
    {
      day: 1,
      time: '8:40 AM – 9:10 AM',
      title: '10 Steps to Improve OHCA Survival & Time/Quality',
      speaker: 'Dr. Andy McCoy',
      description: 'Evidence-based strategies for improving out-of-hospital cardiac arrest (OHCA) survival, and the critical relationship between time and quality in resuscitation outcomes.',
      type: 'lecture'
    },
    {
      day: 1,
      time: '9:10 AM – 9:55 AM',
      title: 'Science of CPR: Overview, Fundamentals',
      speaker: 'Dr. Peter Kudenchuk',
      description: 'Comprehensive overview of the scientific foundations of CPR and evidence-based resuscitation practices.',
      type: 'lecture'
    },
    {
      day: 1,
      time: '9:55 AM – 10:10 AM',
      title: 'Science of CPR Q&A',
      speaker: 'Dr. Peter Kudenchuk',
      description: 'Open Q&A session following the Science of CPR lecture.',
      type: 'lecture'
    },
    {
      day: 1,
      time: '10:10 AM – 10:20 AM',
      title: 'Break',
      speaker: '',
      description: 'Networking break with refreshments.',
      type: 'break'
    },
    {
      day: 1,
      time: '10:20 AM – 10:40 AM',
      title: 'T-CPR Overview',
      speaker: 'Julie Buckingham',
      description: 'Introduction to dispatcher-assisted CPR (T-CPR), including science, protocols, and implementation strategies for emergency communication centers.',
      type: 'lecture'
    },
    {
      day: 1,
      time: '10:40 AM – 10:50 AM',
      title: 'T-CPR Q&A',
      speaker: 'Julie Buckingham',
      description: 'Open Q&A session following the T-CPR Overview.',
      type: 'lecture'
    },
    {
      day: 1,
      time: '10:50 AM – 11:00 AM',
      title: 'HP-CPR Overview',
      speaker: 'Jonathan Larsen',
      description: 'Introduction to High-Performance CPR fundamentals ahead of the live demonstration.',
      type: 'lecture'
    },
    {
      day: 1,
      time: '11:00 AM – 11:30 AM',
      title: 'HP-CPR Demonstration',
      speaker: 'Seattle Fire Department',
      description: 'Live demonstration of High-Performance CPR techniques by the Seattle Fire Department, showcasing team coordination, role clarity, and real-time feedback methods.',
      type: 'demonstration'
    },
    {
      day: 1,
      time: '11:30 AM – 11:40 AM',
      title: 'QI Basics',
      speaker: 'Dr. Catherine Counts',
      description: 'Fundamentals of quality improvement as applied to cardiac arrest response systems.',
      type: 'lecture'
    },
    {
      day: 1,
      time: '11:40 AM – 11:50 AM',
      title: 'QI Q&A',
      speaker: 'Dr. Catherine Counts',
      description: 'Open Q&A session following the QI Basics lecture.',
      type: 'lecture'
    },
    {
      day: 1,
      time: '11:50 AM – 12:30 PM',
      title: 'Lunch',
      speaker: '',
      description: 'Catered lunch and networking opportunity with faculty and fellow attendees.',
      type: 'Lunch'
    },
    {
      day: 1,
      time: '12:30 PM – 1:00 PM',
      title: 'Debriefing',
      speaker: 'Dr. Bryan McNeilly',
      description: 'Structured approaches to post-event debriefing and their role in continuous quality improvement.',
      type: 'lecture'
    },
    {
      day: 1,
      time: '1:00 PM – 1:15 PM',
      title: 'Cutting Edge Solutions (AI, VFR, New AED Tech)',
      speaker: 'Dr. Andy McCoy',
      description: 'A look at emerging technologies in resuscitation, including artificial intelligence, ventricular fibrillation response (VFR), and next-generation AED technology.',
      type: 'lecture'
    },
    {
      day: 1,
      time: '1:15 PM – 1:55 PM',
      title: 'RA Alumni: The Real World',
      speaker: 'Dr. Lance Jobe, Ben Miller-Todd, Scott Helle (12 minutes each)',
      description: 'Resuscitation Academy alumni share real-world experiences implementing improvement projects and lessons learned after completing the Academy.',
      type: 'lecture'
    },
    {
      day: 1,
      time: '1:55 PM – 2:00 PM',
      title: 'Setting Up the Breakout Sessions / What to Expect Tomorrow',
      speaker: 'Dr. Andy McCoy',
      description: 'Orientation for the afternoon breakout session rotations and a preview of Day 2.',
      type: 'lecture'
    },
    {
      day: 1,
      time: '2:00 PM – 2:30 PM',
      title: 'Breakout Rotation 1',
      speaker: 'Dr. Nick Johnson · Dr. Peter Kudenchuk · Dr. Jessie Wall · Laura Miccile & Dr. Bryan McNeilly',
      description: 'Front (Community & Law Enforcement, Dr. Nick Johnson) · Middle (Advanced Science, Dr. Peter Kudenchuk) · Back (Pediatrics, Dr. Jessie Wall) · Greenhouse (Post-ROSC Care, Laura Miccile & Dr. Bryan McNeilly). Attendees rotate through all four rooms across the afternoon.',
      type: 'Breakout'
    },
    {
      day: 1,
      time: '2:35 PM – 3:05 PM',
      title: 'Breakout Rotation 2',
      speaker: 'Dr. Nick Johnson · Dr. Peter Kudenchuk · Dr. Jessie Wall · Laura Miccile & Dr. Bryan McNeilly',
      description: 'Second rotation: Post-ROSC Care, Advanced Science, Pediatrics, and Community & Law Enforcement — attendees rotate to the next room in the sequence.',
      type: 'Breakout'
    },
    {
      day: 1,
      time: '3:10 PM – 3:40 PM',
      title: 'Breakout Rotation 3',
      speaker: 'Dr. Nick Johnson · Dr. Peter Kudenchuk · Dr. Jessie Wall · Laura Miccile & Dr. Bryan McNeilly',
      description: 'Third rotation: Post-ROSC Care, Advanced Science, Pediatrics, and Community & Law Enforcement — attendees rotate to the next room in the sequence.',
      type: 'Breakout'
    },
    {
      day: 1,
      time: '3:45 PM – 4:15 PM',
      title: 'Breakout Rotation 4',
      speaker: 'Dr. Nick Johnson · Dr. Peter Kudenchuk · Dr. Jessie Wall · Laura Miccile & Dr. Bryan McNeilly',
      description: 'Final rotation completing the Post-ROSC Care, Advanced Science, Pediatrics, and Community & Law Enforcement breakout circuit.',
      type: 'Breakout'
    },

    // ─── DAY 2 – OCTOBER 13 | ROLE-SPECIFIC TRACKS ─────────────────────────
    {
      day: 2,
      time: '8:00 AM – 2:00 PM',
      title: 'Track A: HP-CPR Train the Trainer',
      speaker: 'Jonathan Larsen',
      description: 'Full-day, hands-on Train-the-Trainer track equipping participants to deliver HP-CPR training in their own agencies. Lunch from 12:00 PM – 1:00 PM.',
      type: 'Breakout'
    },
    {
      day: 2,
      time: '9:00 AM – 2:00 PM',
      title: 'Track B: T-CPR',
      speaker: 'Julie Buckingham',
      description: 'Full-day, dispatcher-focused track covering telecommunicator CPR protocols, quality improvement, and hands-on practice. Lunch from 12:00 PM – 1:00 PM.',
      type: 'Breakout'
    },
    {
      day: 2,
      time: '9:00 AM – 2:00 PM',
      title: 'Track C: Physician Breakout',
      speaker: 'Dr. Andy McCoy',
      description: 'Full-day, physician-focused breakout track covering advanced resuscitation science and systems leadership topics. Lunch from 12:00 PM – 1:00 PM.',
      type: 'Breakout'
    },
    {
      day: 2,
      time: '2:10 PM – 2:30 PM',
      title: 'Small Group Project Time',
      speaker: '',
      description: 'Debrief with your community about your breakout sessions. Determine which project you will tackle. Fill out the project form in the RA app. Present your project to your mentor, get feedback, and plan how you will stay in touch.',
      type: 'lecture'
    },
    {
      day: 2,
      time: '2:30 PM – 2:45 PM',
      title: 'RA Resources',
      speaker: 'Tegan Hampton',
      description: 'Overview of Resuscitation Academy resources, toolkits, and ongoing support available to attendees after the Academy concludes.',
      type: 'lecture'
    },
    {
      day: 2,
      time: '2:45 PM – 3:05 PM',
      title: 'Thoughts From the Other Side',
      speaker: 'Michael Arbuck',
      description: 'A powerful personal perspective grounding the training in the real-world impact of cardiac arrest response.',
      type: 'lecture'
    },
    {
      day: 2,
      time: '3:05 PM – 3:20 PM',
      title: 'Q&A',
      speaker: 'Dr. Andy McCoy',
      description: 'Open Q&A session addressing questions from across the two days of training.',
      type: 'lecture'
    },
    {
      day: 2,
      time: '3:20 PM – 3:40 PM',
      title: 'Putting It All Together',
      speaker: 'Dr. Tom Rea',
      description: 'Synthesizing the two days of training into an actionable plan for improving cardiac arrest response systems.',
      type: 'lecture'
    },
    {
      day: 2,
      time: '3:40 PM – 3:45 PM',
      title: 'Evaluations',
      speaker: '',
      description: 'Participants complete final conference evaluations.',
      type: 'Feedback'
    },
    {
      day: 2,
      time: '3:45 PM – 3:50 PM',
      title: 'Conclusion',
      speaker: '',
      description: 'Closing remarks for the Resuscitation Academy Seattle.',
      type: 'Opening'
    },
  ];

  const navTabs = [
    { id: 'home', label: 'Home' },
    { id: 'day1agenda', label: 'Day 1 – Conference Agenda' },
    { id: 'day2workshops', label: 'Day 2 – Role-Specific Tracks' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'forms', label: 'Forms' },
    { id: 'resources', label: 'Resources' },
    { id: 'future', label: 'Future' },
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Georgia Pro, Georgia, serif' }}>
      <header className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold" style={{ color: '#991B1E' }}>Resuscitation Academy</span>
                <span className="text-xs font-semibold tracking-wide" style={{ color: '#404041' }}>SEATTLE</span>
              </div>
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-semibold" style={{ color: '#404041' }}>October 12–13, 2026 · Seattle, WA</p>
            </div>
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-2">
            {navTabs.map((tab) => (
              <button key={tab.id} onClick={() => { setActiveTab(tab.id); setMobileMenuOpen(false); }} className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${activeTab === tab.id ? 'text-white' : 'hover:bg-gray-100'}`} style={activeTab === tab.id ? { backgroundColor: '#8B8EC5' } : {}}>{tab.label}</button>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg border shadow-sm p-4 sticky top-24">
              <nav className="space-y-1">
                {navTabs.map((tab) => (
                  <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full text-left px-4 py-3 rounded-lg transition-colors font-medium ${activeTab === tab.id ? 'text-white' : 'hover:bg-gray-100'}`} style={activeTab === tab.id ? { backgroundColor: '#991B1E' } : { color: '#404041' }}>{tab.label}</button>
                ))}
              </nav>
            </div>
          </aside>

          <main className="flex-1 min-w-0">
            {activeTab === 'home' && (
              <div className="space-y-6">
                <div className="text-white p-8 rounded-lg" style={{ background: 'linear-gradient(to right, #991B1E, #60628A)' }}>
                  <h1 className="text-3xl font-bold mb-2">Resuscitation Academy Seattle</h1>
                  <p className="text-lg mb-2">October 12–13, 2026 · Seattle, Washington</p>
                  <p className="text-gray-100 mb-4">Advancing excellence in emergency care through evidence-based education</p>
                  {REGISTRATION_LINK ? (
                    <button onClick={() => window.open(REGISTRATION_LINK, '_blank')} className="inline-flex items-center gap-2 px-6 py-3 bg-white font-semibold rounded-lg hover:opacity-90" style={{ color: '#991B1E' }}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      Register Now
                    </button>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 font-semibold rounded-lg cursor-not-allowed">Registration Opening Soon</span>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg border shadow-sm p-6">
                    <h3 className="text-xl font-semibold mb-4" style={{ color: '#991B1E' }}>Event Details</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Schedule</p>
                        <p className="text-sm text-gray-600">Monday, October 12 – General Session &amp; Breakouts</p>
                        <p className="text-sm text-gray-600">Tuesday, October 13 – HP-CPR, T-CPR &amp; Physician Role-Specific Tracks</p>
                      </div>
                      <div>
                        <p className="font-semibold">Venue</p>
                        <p className="text-sm text-gray-600">University of Washington Horticulture Center</p>
                        <p className="text-sm text-gray-600">Seattle, WA</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border shadow-sm p-6">
                    <h3 className="text-xl font-semibold mb-4">Quick Access</h3>
                    <div className="space-y-2">
                      {REGISTRATION_LINK ? (
                        <button onClick={() => window.open(REGISTRATION_LINK, '_blank')} className="w-full text-left px-4 py-2 rounded border text-white hover:opacity-90" style={{ backgroundColor: '#991B1E' }}>Register for the Event</button>
                      ) : (
                        <span className="block w-full text-left px-4 py-2 rounded border bg-gray-100 text-gray-400">Registration Opening Soon</span>
                      )}
                      <button onClick={() => setActiveTab('day1agenda')} className="w-full text-left px-4 py-2 rounded border hover:bg-gray-50">View Day 1 – Conference Agenda</button>
                      <button onClick={() => setActiveTab('day2workshops')} className="w-full text-left px-4 py-2 rounded border hover:bg-gray-50">View Day 2 – Role-Specific Tracks</button>
                      <button onClick={() => setActiveTab('faculty')} className="w-full text-left px-4 py-2 rounded border hover:bg-gray-50">Meet Our Faculty</button>
                      <button onClick={() => setActiveTab('resources')} className="w-full text-left px-4 py-2 rounded border hover:bg-gray-50">Training Resources</button>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-4" style={{ color: '#991B1E' }}>Logistics Information</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-1">Registration</h4>
                      <p className="text-sm text-gray-600">Day 1 registration begins at 8:00 AM with a light breakfast. Please arrive early to check in and receive your conference materials.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Venue</h4>
                      <p className="text-sm text-gray-600">University of Washington Horticulture Center, Seattle, WA. We acknowledge the Coast Salish peoples of this land and the shared waters of the Duwamish, Puyallup, Suquamish, Tulalip, and Muckleshoot nations.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Meals</h4>
                      <p className="text-sm text-gray-600">Light breakfast provided Day 1 at 8:00 AM. Lunch provided both days (Day 1: 11:50 AM – 12:30 PM; Day 2: 12:00 PM – 1:00 PM).</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Day 1 Breakouts</h4>
                      <p className="text-sm text-gray-600">Attendees rotate through four breakout rooms in the afternoon: Post-ROSC Care, Advanced Science, Pediatrics, and Community &amp; Law Enforcement.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Day 2 Tracks</h4>
                      <p className="text-sm text-gray-600">Attendees choose one of three role-specific, full-day tracks: HP-CPR Train the Trainer, T-CPR, or Physician Breakout.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'day1agenda' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Day 1 – Conference Agenda</h2>
                  <p className="text-gray-600 mb-2">Monday, October 12, 2026 — General session, lectures, and concurrent breakouts</p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="text-xs font-semibold px-3 py-1 text-white rounded-full" style={{ backgroundColor: '#8B8EC5' }}>Day 1 – Oct 12: General Session &amp; Breakouts</span>
                  </div>
                </div>
                {agendaItems.filter((item) => item.day === 1).map((item, index) => (
                  <div key={index} className="bg-white rounded-lg border shadow-sm p-6 border-l-4" style={{ borderLeftColor: '#8B8EC5' }}>
                    <div className="mb-3">
                      <span className="text-xs font-semibold px-2 py-1 text-white rounded" style={{ backgroundColor: '#8B8EC5' }}>
                        Day 1 – Oct 12 · General Session
                      </span>
                      {item.type !== 'registration' && item.type !== 'break' && item.type !== 'Lunch' && item.type !== 'reception' && (
                        <span className="ml-2 text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: '#F0F0F0', color: '#404041' }}>{item.type}</span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{item.time}</p>
                    {item.speaker && <p className="text-sm font-semibold mb-3" style={{ color: '#991B1E' }}>{item.speaker}</p>}
                    <p className="text-sm text-gray-600">{item.description}</p>
                    {item.type !== 'registration' && item.type !== 'break' && item.type !== 'Lunch' && item.type !== 'reception' && (
                      <button onClick={() => window.open(SURVEY_MONKEY_FEEDBACK, '_blank')} className="mt-4 px-4 py-2 text-sm border rounded hover:bg-gray-50" style={{ borderColor: '#991B1E', color: '#991B1E' }}>Provide Feedback</button>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'day2workshops' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Day 2 – Role-Specific Tracks</h2>
                  <p className="text-gray-600 mb-2">Tuesday, October 13, 2026 — HP-CPR Train the Trainer, T-CPR &amp; Physician Breakout</p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="text-xs font-semibold px-3 py-1 text-white rounded-full" style={{ backgroundColor: '#60628A' }}>Day 2 – Oct 13: Role-Specific Tracks</span>
                  </div>
                </div>
                {agendaItems.filter((item) => item.day === 2).map((item, index) => (
                  <div key={index} className="bg-white rounded-lg border shadow-sm p-6 border-l-4" style={{ borderLeftColor: '#60628A' }}>
                    <div className="mb-3">
                      <span className="text-xs font-semibold px-2 py-1 text-white rounded" style={{ backgroundColor: '#60628A' }}>
                        Day 2 – Oct 13 · Role-Specific Tracks
                      </span>
                      {item.type !== 'registration' && item.type !== 'break' && item.type !== 'Lunch' && item.type !== 'reception' && (
                        <span className="ml-2 text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: '#F0F0F0', color: '#404041' }}>{item.type}</span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{item.time}</p>
                    {item.speaker && <p className="text-sm font-semibold mb-3" style={{ color: '#991B1E' }}>{item.speaker}</p>}
                    <p className="text-sm text-gray-600">{item.description}</p>
                    {item.type !== 'registration' && item.type !== 'break' && item.type !== 'Lunch' && item.type !== 'reception' && (
                      <button onClick={() => window.open(SURVEY_MONKEY_FEEDBACK, '_blank')} className="mt-4 px-4 py-2 text-sm border rounded hover:bg-gray-50" style={{ borderColor: '#991B1E', color: '#991B1E' }}>Provide Feedback</button>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'faculty' && (
              <div className="space-y-6">
                {selectedFaculty ? (
                  <div>
                    <button onClick={() => setSelectedFaculty(null)} className="mb-4 px-4 py-2 text-sm border rounded hover:bg-gray-50" style={{ borderColor: '#991B1E', color: '#991B1E' }}>← Back to Faculty Directory</button>
                    <div className="bg-white rounded-lg border shadow-sm p-6">
                      <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                        {selectedFaculty.image ? (
                          <img src={selectedFaculty.image} alt={selectedFaculty.name} className="w-32 h-32 rounded-lg object-cover" />
                        ) : (
                          <div className="w-32 h-32 rounded-lg flex items-center justify-center text-white text-3xl font-semibold" style={{ backgroundColor: '#8B8EC5' }}>{selectedFaculty.initials}</div>
                        )}
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold mb-2">{selectedFaculty.name}</h2>
                          {selectedFaculty.credentials && <p className="text-lg text-gray-600 mb-2">{selectedFaculty.credentials}</p>}
                          <p className="font-semibold mb-1" style={{ color: '#991B1E' }}>{selectedFaculty.title}</p>
                          <p className="text-gray-600 mb-3">{selectedFaculty.specialty}</p>
                          {selectedFaculty.linkedin && (
                            <a href={selectedFaculty.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm px-3 py-1 border rounded hover:bg-gray-50" style={{ borderColor: '#991B1E', color: '#991B1E' }}>
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                              View LinkedIn Profile
                            </a>
                          )}
                        </div>
                      </div>
                      <div><h3 className="text-lg font-semibold mb-3">Biography</h3><p className="text-gray-600 leading-relaxed">{selectedFaculty.bio}</p></div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Faculty Directory</h2>
                      <p className="text-gray-600 mb-6">Meet the expert instructors and presenters for the Resuscitation Academy Seattle</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {faculty.map((member, index) => (
                        <div key={index} onClick={() => setSelectedFaculty(member)} className="bg-white rounded-lg border shadow-sm p-6 border-l-4 cursor-pointer hover:shadow-lg transition-shadow" style={{ borderLeftColor: '#8B8EC5' }}>
                          <div className="flex flex-col items-center text-center">
                            {member.image ? (
                              <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4" />
                            ) : (
                              <div className="w-24 h-24 rounded-full flex items-center justify-center text-white text-xl font-semibold mb-4" style={{ backgroundColor: '#8B8EC5' }}>{member.initials}</div>
                            )}
                            <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                            {member.credentials && <p className="text-sm text-gray-600 mb-1">{member.credentials}</p>}
                            <p className="text-sm font-semibold mb-1" style={{ color: '#991B1E' }}>{member.title}</p>
                            <p className="text-sm text-gray-600">{member.specialty}</p>
                            <button className="mt-4 text-sm hover:underline" style={{ color: '#991B1E' }}>View Full Bio →</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {activeTab === 'forms' && (
              <div className="space-y-6">
                <div><h2 className="text-2xl font-bold mb-4">Forms &amp; Feedback</h2><p className="text-gray-600 mb-6">Register for the event and share your feedback to help us improve future conferences</p></div>

                <div className="bg-white rounded-lg border-2 shadow-sm p-6" style={{ borderColor: '#991B1E' }}>
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-xs font-semibold px-2 py-1 text-white rounded" style={{ backgroundColor: '#991B1E' }}>Registration</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Event Registration</h3>
                  <p className="text-sm text-gray-600 mb-4">Register for the Resuscitation Academy Seattle – October 12–13, 2026. Spots are limited; please register early to secure your place.</p>
                  {REGISTRATION_LINK ? (
                    <button onClick={() => window.open(REGISTRATION_LINK, '_blank')} className="w-full px-4 py-3 text-white rounded hover:opacity-90 flex items-center justify-center gap-2 font-semibold" style={{ backgroundColor: '#991B1E' }}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      Register Now
                    </button>
                  ) : (
                    <div className="w-full px-4 py-3 bg-gray-100 text-gray-400 rounded flex items-center justify-center gap-2 font-semibold">Registration Link Coming Soon</div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg border shadow-sm p-6 border-l-4" style={{ borderLeftColor: '#8B8EC5' }}>
                    <h3 className="text-xl font-semibold mb-2">Session Feedback</h3>
                    <p className="text-sm text-gray-600 mb-4">Provide feedback for individual sessions to help improve the program</p>
                    <button onClick={() => window.open(SURVEY_MONKEY_FEEDBACK, '_blank')} className="w-full px-4 py-2 text-white rounded hover:opacity-90 flex items-center justify-center gap-2" style={{ backgroundColor: '#991B1E' }}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      Open Session Feedback Form
                    </button>
                  </div>
                  <div className="bg-white rounded-lg border shadow-sm p-6 border-l-4" style={{ borderLeftColor: '#8B8EC5' }}>
                    <h3 className="text-xl font-semibold mb-2">Project Submission</h3>
                    <p className="text-sm text-gray-600 mb-4">Submit your team resuscitation improvement project via Microsoft Forms</p>
                    <button onClick={() => window.open(PROJECT_SUBMISSION, '_blank')} className="w-full px-4 py-2 text-white rounded hover:opacity-90 flex items-center justify-center gap-2" style={{ backgroundColor: '#991B1E' }}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      Open Project Submission Form
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-lg border shadow-sm p-6 border-l-4" style={{ borderLeftColor: '#991B1E' }}>
                  <h3 className="text-xl font-semibold mb-2">Overall Conference Feedback</h3>
                  <p className="text-sm text-gray-600 mb-4">Share your overall experience with the Resuscitation Academy Seattle</p>
                  <button onClick={() => window.open(SURVEY_MONKEY_FEEDBACK, '_blank')} className="w-full px-4 py-2 text-white rounded hover:opacity-90 flex items-center justify-center gap-2" style={{ backgroundColor: '#991B1E' }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    Open Conference Feedback Form
                  </button>
                </div>

                <div className="rounded-lg p-6" style={{ backgroundColor: '#D9D9E6' }}>
                  <h3 className="text-lg font-semibold mb-2">About Our Forms</h3>
                  <p className="text-sm" style={{ color: '#404041' }}>
                    <strong>Registration:</strong> Link coming soon — swap the REGISTRATION_LINK constant in the code once you have a live registration form.<br />
                    <strong>Session Feedback:</strong> Hosted on Microsoft Forms for quick and easy session evaluations (same form as the other Resuscitation Academy apps).<br />
                    <strong>Project Submission:</strong> Hosted on Microsoft Forms for secure project documentation and team information (same form as the other Resuscitation Academy apps).
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'resources' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Tools &amp; Resources</h2>
                  <p className="text-gray-600 mb-6">Essential training materials and reference guides from Resuscitation Academy</p>
                </div>

                <div className="bg-white rounded-lg border shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-4" style={{ color: '#991B1E' }}>Resuscitation Academy Toolkits</h3>
                  <p className="text-sm text-gray-600 mb-6">Downloadable toolkits for improving cardiac arrest survival rates</p>

                  <div className="space-y-4">
                    <a
                      href="https://mycares.net/sitepages/uploads/2018/Resuscitation%20Academy%20TCPR%20Toolkit.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 border-2 rounded-lg hover:shadow-md transition-shadow"
                      style={{ borderColor: '#8B8EC5' }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: '#991B1E' }}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1" style={{ color: '#991B1E' }}>T-CPR Toolkit</h4>
                          <p className="text-sm text-gray-600 mb-2">Telecommunicator CPR implementation guide with protocols, training materials, and quality improvement resources</p>
                          <span className="text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: '#F0F0F0', color: '#404041' }}>PDF Download</span>
                        </div>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </a>

                    <a
                      href="https://globalresuscitationalliance.org/downloads/ebook/10_steps_2019.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 border-2 rounded-lg hover:shadow-md transition-shadow"
                      style={{ borderColor: '#8B8EC5' }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: '#991B1E' }}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1" style={{ color: '#991B1E' }}>10 Steps to Improve OHCA Survival</h4>
                          <p className="text-sm text-gray-600 mb-2">Evidence-based strategies eBook for improving out-of-hospital cardiac arrest outcomes</p>
                          <span className="text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: '#F0F0F0', color: '#404041' }}>PDF Download</span>
                        </div>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </a>

                    <a
                      href="/RA%20Project%20Management%20Guide%20updated.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 border-2 rounded-lg hover:shadow-md transition-shadow"
                      style={{ borderColor: '#8B8EC5' }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: '#991B1E' }}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1" style={{ color: '#991B1E' }}>RA Project Management Guide</h4>
                          <p className="text-sm text-gray-600 mb-2">Step-by-step guide for planning and managing your Resuscitation Academy improvement project</p>
                          <span className="text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: '#F0F0F0', color: '#404041' }}>PDF Download</span>
                        </div>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </a>

                    <a
                      href="https://www.resuscitationacademy.org/toolkits"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 border-2 rounded-lg hover:shadow-md transition-shadow"
                      style={{ borderColor: '#60628A' }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: '#60628A' }}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1" style={{ color: '#60628A' }}>View All Toolkits</h4>
                          <p className="text-sm text-gray-600 mb-2">Browse the complete collection of Resuscitation Academy toolkits and resources</p>
                          <span className="text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: '#F0F0F0', color: '#404041' }}>Visit Website</span>
                        </div>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-lg border shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-4" style={{ color: '#991B1E' }}>Additional Resources</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <span className="text-xs font-semibold px-2 py-1 text-white rounded" style={{ backgroundColor: '#8B8EC5' }}>CPR Protocols</span>
                      <h4 className="font-semibold mt-2 mb-1">High-Performance CPR Checklist</h4>
                      <p className="text-sm text-gray-600">Essential elements for HP-CPR implementation</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <span className="text-xs font-semibold px-2 py-1 text-white rounded" style={{ backgroundColor: '#8B8EC5' }}>Team Communication</span>
                      <h4 className="font-semibold mt-2 mb-1">Debriefing Framework</h4>
                      <p className="text-sm text-gray-600">Structured approach to post-event debriefing</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg p-6" style={{ backgroundColor: '#D9D9E6' }}>
                  <h3 className="text-lg font-semibold mb-2">About These Resources</h3>
                  <p className="text-sm" style={{ color: '#404041' }}>
                    These toolkits are developed by Resuscitation Academy to help EMS systems, hospitals, and communities improve cardiac arrest survival rates through evidence-based practices and quality improvement initiatives.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'future' && (
              <div className="space-y-6">
                <div><h2 className="text-2xl font-bold mb-4">Future Conferences</h2><p className="text-gray-600 mb-6">Join us for upcoming resuscitation training courses</p></div>
                <div className="bg-white rounded-lg border-2 shadow-sm p-6" style={{ borderColor: '#991B1E' }}>
                  <span className="text-xs font-semibold px-2 py-1 text-white rounded" style={{ backgroundColor: '#991B1E' }}>Save the Date</span>
                  <h3 className="text-xl font-semibold mt-2 mb-2">Resuscitation Academy Seattle 2027</h3>
                  <p className="text-sm text-gray-600 mb-4">Join us for the next Resuscitation Academy Seattle intensive training course. Two days of expert-led sessions, hands-on workshops, and networking with resuscitation professionals from around the world.</p>
                  <p className="text-sm text-gray-600 mb-4">Dates and location to be announced</p>
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 text-white rounded hover:opacity-90" style={{ backgroundColor: '#991B1E' }}>Get Notified</button>
                    <button className="px-4 py-2 border rounded hover:bg-gray-50" style={{ borderColor: '#991B1E', color: '#991B1E' }}>Learn More</button>
                  </div>
                </div>
                <div className="bg-white rounded-lg border shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-4">About Resuscitation Academy</h3>
                  <p className="text-sm text-gray-600 mb-4">Resuscitation Academy is a premier training program dedicated to improving out-of-hospital cardiac arrest survival through evidence-based education, quality improvement, and collaborative learning. Resuscitation Academy Seattle draws attendees from across the United States and around the world.</p>
                  <div>
                    <h4 className="font-semibold mb-2">What Makes Us Different</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2"><span style={{ color: '#991B1E' }}>✔</span><span>Evidence-based curriculum developed by leading resuscitation experts</span></li>
                      <li className="flex items-start gap-2"><span style={{ color: '#991B1E' }}>✔</span><span>Hands-on training with real-world applications, including role-specific tracks</span></li>
                      <li className="flex items-start gap-2"><span style={{ color: '#991B1E' }}>✔</span><span>Ongoing mentorship and project support</span></li>
                      <li className="flex items-start gap-2"><span style={{ color: '#991B1E' }}>✔</span><span>Global network of alumni implementing life-saving improvements worldwide</span></li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white rounded-lg border shadow-sm p-6 border-l-4" style={{ borderLeftColor: '#8B8EC5' }}>
                  <h3 className="text-xl font-semibold mb-2">Stay Informed</h3>
                  <p className="text-sm text-gray-600 mb-4">Get notified about upcoming courses and special events</p>
                  <div className="space-y-4">
                    <div><label className="block text-sm font-medium mb-2">Email Address</label><input type="email" placeholder="your.email@example.com" className="w-full px-3 py-2 border rounded" /></div>
                    <div className="flex items-center gap-2"><input type="checkbox" id="newsletter" className="w-4 h-4" /><label htmlFor="newsletter" className="text-sm">I agree to receive updates about future courses and events</label></div>
                    <button className="w-full px-4 py-2 text-white rounded hover:opacity-90" style={{ backgroundColor: '#991B1E' }}>Subscribe to Updates</button>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-40 shadow-lg pb-safe">
        <div className="flex justify-around">
          {[
            { id: 'home', label: 'Home' },
            { id: 'day1agenda', label: 'Day 1' },
            { id: 'day2workshops', label: 'Day 2' },
            { id: 'faculty', label: 'Faculty' },
            { id: 'forms', label: 'Forms' },
          ].map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className="flex flex-col items-center gap-1 py-3 px-2 flex-1" style={{ color: activeTab === tab.id ? '#991B1E' : '#404041' }}>
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default ResuscitationAcademyApp;