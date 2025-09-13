'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Download, Phone, MapPin, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function useDarkMode() {
  const [dark, setDark] = React.useState(true)
  React.useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [dark])
  return { dark, setDark }
}

const skills = [
  'C', 'Java', 'Python', 'SQL', 'HTML/CSS', 'Java (Web)',
  'Spring', 'Spring Boot', 'Hibernate', 'REST / RESTful APIs',
  'MySQL', 'JDBC',
  'AWS (EC2, S3, RDS)', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD',
  'Git/GitHub', 'IntelliJ IDEA', 'Postman', 'Agile / Scrum'
]

const experience = [
  {
    role: 'Senior Full Stack Developer',
    company: 'Infosys',
    period: 'Oct 2023 – Present',
    bullets: [
      'Modernized a legacy core banking platform to cloud microservices.',
      'Built React modules for accounts, transactions, and loan workflows.',
      'Developed Spring Boot REST APIs with JWT security and MySQL (JDBC).',
      'Deployed on AWS (EC2/Elastic Beanstalk/RDS) with Jenkins CI/CD and CloudWatch.'
    ],
    stack: 'React, Spring Boot, MySQL, AWS, Jenkins, Docker'
  },
  {
    role: 'Software Developer',
    company: 'Fidelity Information Services (FIS)',
    period: 'May 2022 – Sep 2023',
    bullets: [
      'Built a healthcare platform with role‑based dashboards and teleconsultation.',
      'Implemented microservices (patients, appointments, billing, insurance).',
      'Used JWT/OAuth RBAC, Kafka/WebSockets for real‑time features.',
      'Deployed to AWS with CI/CD and CloudWatch monitoring.'
    ],
    stack: 'React, Spring Boot, Hibernate, MySQL, Kafka, AWS'
  },
  {
    role: 'Full Stack Developer',
    company: 'Shell Oil Company',
    period: 'Dec 2020 – Apr 2022',
    bullets: [
      'Developed HR management system (payroll, leave, attendance, reporting).',
      'Exposed RESTful APIs; JWT/OAuth auth; PDF/Excel reporting.',
      'Cloud deployments with auto‑scaling and monitoring.'
    ],
    stack: 'React, Spring Boot, MySQL, AWS, Jenkins'
  },
  {
    role: 'Full Stack Developer',
    company: 'Lister Technologies, India',
    period: 'Oct 2018 – Aug 2020',
    bullets: [
      'E‑commerce platform with catalog, orders, payments, and dashboards.',
      'JWT auth, role‑based access, scalable microservices.',
      'Search/filters/recommendations; AWS RDS and CI/CD.'
    ],
    stack: 'React, Spring Boot, MySQL, AWS, Jenkins'
  }
]

const projects = [
  { title: 'Core Banking Modernization', highlight: 'Cloud microservices + secure transactions', link: '#' },
  { title: 'Healthcare Management Platform', highlight: 'Teleconsultation, multi‑role UI, HIPAA logging', link: '#' },
  { title: 'HR Management System', highlight: 'Payroll, attendance, reporting with JWT/OAuth', link: '#' },
  { title: 'E‑commerce Platform', highlight: 'Catalog, payments, recommendations', link: '#' },
]

const education = [
  { degree: 'Masters in Data Science', school: 'University at Albany, SUNY', detail: 'Albany, New York' },
  { degree: 'B.E. in Electronics & Communication', school: 'Malla Reddy Engineering College for Women', detail: 'Hyderabad, India' },
]

function Section({ id, title, children }: React.PropsWithChildren<{ id: string; title: string }>) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6"
      >
        {title}
      </motion.h2>
      {children}
    </section>
  )
}

export default function PortfolioSite() {
  const { dark, setDark } = useDarkMode()

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 font-sans">
      {/* Sticky Nav */}
      <div className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-neutral-950/60 border-b border-neutral-200/60 dark:border-neutral-800">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-block h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-pink-500" />
            <span className="font-semibold tracking-tight">Manisha Raparthi</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#experience" className="hover:opacity-70">Experience</a>
            <a href="#projects" className="hover:opacity-70">Projects</a>
            <a href="#skills" className="hover:opacity-70">Skills</a>
            <a href="#education" className="hover:opacity-70">Education</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Toggle dark mode" onClick={() => setDark(!dark)}>
              {dark ? <Sun className="h-5 w-5"/> : <Moon className="h-5 w-5"/>}
            </Button>
            <a href="#resume" className="hidden sm:block">
              <Button size="sm" className="rounded-xl">Download Résumé</Button>
            </a>
          </div>
        </nav>
      </div>

      {/* Hero */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3"
          >
            <p className="text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-400">Software Developer • Full‑Stack • Cloud</p>
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight mt-2">
              Building scalable web & enterprise apps end‑to‑end
            </h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl">
              6+ years designing, developing, and deploying secure, cloud‑native systems across Java/Spring Boot, React, and AWS. Microservices, CI/CD, and data‑driven UX.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact"><Button className="rounded-xl">Contact</Button></a>
              <a href="#projects"><Button variant="outline" className="rounded-xl">View Projects</Button></a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
              <a href="mailto:raparthi2001@gmail.com" className="inline-flex items-center gap-2 hover:opacity-80"><Mail className="h-4 w-4"/> raparthi2001@gmail.com</a>
              <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4"/> +1 (838) 267‑2911</span>
              <span className="hidden sm:inline-flex items-center gap-2"><MapPin className="h-4 w-4"/> Albany, NY</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="md:col-span-2"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500/40 via-fuchsia-500/40 to-pink-500/40 rounded-3xl blur" />
              <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-lg">
                <img src="/avatar.jpg" alt="Portrait placeholder" className="w-full h-72 object-cover"/>
              </div>
            </div>
            <div className="mt-4 flex gap-3">
              <a href="https://github.com/Manisha-Raparthi" target="_blank" rel="noreferrer"><Button variant="outline" className="rounded-xl"><Github className="h-4 w-4 mr-2"/> GitHub</Button></a>
              <a href="https://www.linkedin.com/in/manisha-raparthi-2a117437b" target="_blank" rel="noreferrer"><Button variant="outline" className="rounded-xl"><Linkedin className="h-4 w-4 mr-2"/> LinkedIn</Button></a>
            </div>
          </motion.div>
        </div>
      </header>

      <Section id="about" title="About">
        <Card className="rounded-2xl">
          <CardContent className="pt-6">
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Highly skilled Software Developer experienced in microservices architecture, performance optimization, and cloud deployments (AWS). Strong in Java/Spring Boot, React, and SQL/NoSQL, with a track record delivering secure, scalable applications and CI/CD automation.
            </p>
          </CardContent>
        </Card>
      </Section>

      <Section id="experience" title="Experience">
        <div className="grid md:grid-cols-2 gap-6">
          {experience.map((job, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.03 }}>
              <Card className="rounded-2xl h-full">
                <CardHeader>
                  <CardTitle className="flex flex-col gap-1">
                    <span className="text-lg font-semibold">{job.role}</span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">{job.company} • {job.period}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
                    {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                  <div className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">Stack: {job.stack}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.03 }}>
              <Card className="rounded-2xl h-full">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">{p.highlight}</p>
                  <div className="mt-4">
                    <a href={p.link} className="inline-flex items-center text-sm hover:opacity-80"><ExternalLink className="h-4 w-4 mr-2"/> View details</a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <Card className="rounded-2xl">
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <span key={i} className="px-3 py-1 text-sm rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
                  {s}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </Section>

      <Section id="education" title="Education">
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((e, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{e.degree}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-sm text-neutral-700 dark:text-neutral-300">
                <div className="font-medium">{e.school}</div>
                <div className="text-neutral-500 dark:text-neutral-400">{e.detail}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <Card className="rounded-2xl">
          <CardContent className="pt-6">
            <div className="grid sm:grid-cols-3 gap-4">
              <a href="mailto:raparthi2001@gmail.com"><Button variant="outline" className="w-full rounded-xl"><Mail className="h-4 w-4 mr-2"/> Email</Button></a>
              <a href="https://www.linkedin.com/in/manisha-raparthi-2a117437b" target="_blank" rel="noreferrer"><Button variant="outline" className="w-full rounded-xl"><Linkedin className="h-4 w-4 mr-2"/> LinkedIn</Button></a>
              <a href="https://github.com/Manisha-Raparthi" target="_blank" rel="noreferrer"><Button variant="outline" className="w-full rounded-xl"><Github className="h-4 w-4 mr-2"/> GitHub</Button></a>
            </div>
            <div id="resume" className="mt-6">
              <Button className="rounded-xl"><Download className="h-4 w-4 mr-2"/> Download Résumé (PDF)</Button>
              <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">Replace this button link with Manisha's actual PDF résumé URL.</p>
            </div>
          </CardContent>
        </Card>
      </Section>

      <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-500 dark:text-neutral-400">
        © {new Date().getFullYear()} Manisha Raparthi. Built with Next.js, Tailwind, and Framer Motion.
      </footer>
    </div>
  )
}
