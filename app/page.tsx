'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleUserRound,
  FileCheck2,
  GraduationCap,
  Landmark,
  LockKeyhole,
  Network,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  Upload,
  UsersRound,
} from 'lucide-react'

const journey = [
  { step: '01', label: 'Verify', detail: 'Credentials', icon: FileCheck2, tone: 'mint' },
  { step: '02', label: 'Analyze', detail: 'Skills', icon: SearchCheck, tone: 'blue' },
  { step: '03', label: 'Find gap', detail: 'Target role', icon: Target, tone: 'amber' },
  { step: '04', label: 'Learn', detail: 'Roadmap', icon: BookOpen, tone: 'violet' },
  { step: '05', label: 'Prove', detail: 'Capability', icon: BadgeCheck, tone: 'coral' },
  { step: '06', label: 'Match', detail: 'Opportunity', icon: BriefcaseBusiness, tone: 'ink' },
]

const roles = [
  { title: 'Candidates', copy: 'Turn scattered certificates into a trusted, job-ready profile.', icon: CircleUserRound, action: 'Build your profile' },
  { title: 'Institutes', copy: 'Issue credentials that students can carry, verify, and prove.', icon: GraduationCap, action: 'Issue credentials' },
  { title: 'Recruiters', copy: 'Find people by demonstrated skills, not just keywords.', icon: UsersRound, action: 'Explore talent' },
]

export default function Page() {
  const [activeRole, setActiveRole] = useState<string | null>(null)

  const openRole = (role: string) => setActiveRole(role)

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8faf8] text-[#12221f]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[580px] bg-[radial-gradient(circle_at_76%_14%,rgba(187,235,215,0.48),transparent_31%),radial-gradient(circle_at_16%_3%,rgba(219,232,255,0.62),transparent_26%)]" />

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5" aria-label="SkillProof home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#123b35] text-white shadow-sm"><Network className="h-5 w-5" /></span>
          <span className="text-[17px] font-bold tracking-[-0.04em]">Skill<span className="text-[#2c9d78]">Proof</span></span>
        </a>
        <div className="hidden items-center gap-8 text-[13px] font-medium text-[#5d6e69] md:flex">
          <a href="#architecture" className="transition-colors hover:text-[#173f38]">How it works</a>
          <a href="#roles" className="transition-colors hover:text-[#173f38]">For your role</a>
          <a href="#trust" className="transition-colors hover:text-[#173f38]">Trust layer</a>
        </div>
        <button onClick={() => openRole('Sign in')} className="rounded-full border border-[#cbd9d5] bg-white/70 px-4 py-2 text-[13px] font-semibold text-[#173f38] shadow-sm transition hover:bg-white">Sign in <ArrowRight className="ml-1 inline h-3.5 w-3.5" /></button>
      </nav>

      <section id="top" className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-14 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-20 lg:pt-20">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#b9ded0] bg-white/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#287c61]"><Sparkles className="h-3.5 w-3.5" /> The employability trust layer</div>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[0.98] tracking-[-0.07em] text-[#12221f] sm:text-6xl lg:text-[76px]">Prove what you can <span className="text-[#35a77d]">do.</span></h1>
          <p className="mt-7 max-w-xl text-[17px] leading-8 text-[#60726c]">SkillProof connects verified credentials, real capability, and the right opportunity — in one clear journey.</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button onClick={() => openRole('Candidate')} className="rounded-full bg-[#123b35] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(18,59,53,0.16)] transition hover:bg-[#1b5148]">Start with your skills <ArrowRight className="ml-2 inline h-4 w-4" /></button>
            <a href="#architecture" className="rounded-full border border-[#cbd9d5] bg-white/65 px-5 py-3 text-sm font-semibold text-[#3f5b54] transition hover:bg-white">See the architecture</a>
          </div>
          <div className="mt-10 flex items-center gap-3 text-xs text-[#71817c]"><div className="flex -space-x-2"><span className="avatar bg-[#d9ebff]">P</span><span className="avatar bg-[#ffe5c8]">R</span><span className="avatar bg-[#d5f0e3]">I</span></div><span><strong className="text-[#3c554e]">Trust-first by design</strong><br />Built for candidates, institutes & employers</span></div>
        </div>

        <div className="relative mx-auto w-full max-w-[480px] lg:ml-auto">
          <div className="absolute -right-2 top-8 h-44 w-44 rounded-full bg-[#d8f3e6] blur-3xl" />
          <div className="relative rounded-[28px] border border-white/80 bg-white/80 p-4 shadow-[0_24px_70px_rgba(39,79,67,0.14)] backdrop-blur-xl">
            <div className="flex items-center justify-between rounded-2xl bg-[#f2f7f4] px-4 py-3"><div><p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#7a8d87]">Candidate wallet</p><p className="mt-1 text-sm font-semibold">Priya Sharma</p></div><div className="flex items-center gap-1.5 rounded-full bg-[#dff5e9] px-2.5 py-1 text-[10px] font-bold text-[#28805f]"><ShieldCheck className="h-3.5 w-3.5" /> Verified</div></div>
            <div className="mt-3 grid grid-cols-2 gap-3"><div className="rounded-2xl border border-[#e7eeeb] bg-white p-4"><p className="text-[11px] text-[#7d8c88]">Skill strength</p><div className="mt-2 flex items-end gap-1"><span className="text-3xl font-semibold tracking-[-0.06em]">82</span><span className="mb-1 text-xs text-[#7d8c88]">/ 100</span></div><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#e9f0ed]"><div className="h-full w-[82%] rounded-full bg-[#40b386]" /></div></div><div className="rounded-2xl border border-[#e7eeeb] bg-white p-4"><p className="text-[11px] text-[#7d8c88]">Job match</p><div className="mt-2 flex items-end gap-1"><span className="text-3xl font-semibold tracking-[-0.06em]">87</span><span className="mb-1 text-xs text-[#7d8c88]">%</span></div><p className="mt-3 text-[10px] font-semibold text-[#2d9470]">+12% this month</p></div></div>
            <div className="mt-3 rounded-2xl bg-[#123b35] p-4 text-white"><div className="flex items-center justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#9bd7bd]">Target role</p><p className="mt-1 text-lg font-semibold">Frontend Developer</p></div><span className="rounded-xl bg-white/10 p-2"><Target className="h-5 w-5 text-[#a6e1c3]" /></span></div><div className="mt-5 flex gap-2"><span className="pill-dark">React</span><span className="pill-dark">JavaScript</span><span className="pill-dark">Git</span><span className="pill-dark opacity-50">+2</span></div></div>
            <div className="mt-3 flex items-center gap-3 rounded-2xl border border-[#e7eeeb] bg-white px-4 py-3"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fff3db] text-[#b37820]"><Upload className="h-4 w-4" /></span><div className="flex-1"><p className="text-xs font-semibold">JavaScript certificate</p><p className="text-[10px] text-[#80918b]">Issuer confirmed · 2 min ago</p></div><Check className="h-4 w-4 text-[#36a476]" /></div>
          </div>
        </div>
      </section>

      <section id="architecture" className="relative z-10 border-y border-[#e1ebe6] bg-white/60 px-6 py-14 lg:px-10 lg:py-16"><div className="mx-auto max-w-7xl"><div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="eyebrow">Product architecture</p><h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-[#16332d] sm:text-4xl">One journey. Every layer of proof.</h2></div><p className="max-w-sm text-sm leading-6 text-[#71817c]">From a credential scan to a confident hiring decision, every step builds on verified evidence.</p></div><div className="grid gap-2 md:grid-cols-6">{journey.map((item, index) => { const Icon = item.icon; return <div key={item.label} className="group relative rounded-2xl border border-[#e1ebe6] bg-white p-4 transition hover:-translate-y-1 hover:shadow-lg"><div className={`icon-${item.tone} mb-5 flex h-9 w-9 items-center justify-center rounded-xl`}><Icon className="h-4.5 w-4.5" /></div><p className="text-[10px] font-bold tracking-[0.15em] text-[#9aa9a4]">{item.step}</p><p className="mt-1 text-sm font-bold text-[#173b34]">{item.label}</p><p className="mt-1 text-[11px] text-[#83928e]">{item.detail}</p>{index < journey.length - 1 && <ChevronRight className="absolute -right-3 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-[#9bb1a9] md:block" />}</div> })}</div></div></section>

      <section id="roles" className="relative z-10 mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-18"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><p className="eyebrow">Designed for the whole ecosystem</p><h2 className="mt-2 max-w-md text-3xl font-semibold leading-tight tracking-[-0.05em] text-[#16332d] sm:text-4xl">Make skills visible. Make hiring human.</h2><p className="mt-5 max-w-md text-sm leading-7 text-[#71817c]">A shared language for people who are learning, teaching, and hiring — with privacy and agency at the center.</p><div id="trust" className="mt-7 flex items-center gap-2 text-xs font-semibold text-[#4d6960]"><LockKeyhole className="h-4 w-4 text-[#43a97f]" /> Selective sharing keeps candidates in control.</div></div><div className="grid gap-3 sm:grid-cols-3">{roles.map((role) => { const Icon = role.icon; return <div key={role.title} className="rounded-[22px] border border-[#e0ebe6] bg-white p-5 shadow-[0_8px_30px_rgba(42,77,65,0.04)]"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf7f1] text-[#318f6e]"><Icon className="h-5 w-5" /></span><h3 className="mt-5 text-base font-bold text-[#173b34]">{role.title}</h3><p className="mt-2 min-h-[66px] text-xs leading-5 text-[#778983]">{role.copy}</p><button onClick={() => openRole(role.title)} className="mt-5 text-xs font-bold text-[#318f6e]">{role.action} <ArrowRight className="ml-1 inline h-3.5 w-3.5" /></button></div> })}</div></div></section>

      <footer className="border-t border-[#dfeae5] bg-[#eef6f1] px-6 py-7 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs text-[#71817c] sm:flex-row sm:items-center"><p>SkillProof — Prove what you can do.</p><p>Credential trust layer · Skill intelligence · Employability matching</p></div></footer>

      {activeRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#102c27]/35 p-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${activeRole} onboarding`}>
          <div className="w-full max-w-md rounded-[28px] border border-white/70 bg-white p-7 shadow-2xl">
            <div className="flex items-start justify-between gap-5">
              <div><p className="eyebrow">SkillProof workspace</p><h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#16332d]">Start as a {activeRole.toLowerCase()}</h2><p className="mt-3 text-sm leading-6 text-[#71817c]">Your first step is ready. Connect evidence, map skills, and make your next opportunity easier to prove.</p></div>
              <button onClick={() => setActiveRole(null)} className="rounded-full border border-[#dce8e2] px-3 py-1 text-xs font-bold text-[#5e716a]" aria-label="Close dialog">Close</button>
            </div>
            <div className="mt-6 grid gap-2">
              {['Create your proof profile', 'Verify your credentials', 'Choose a target role'].map((step, index) => <div key={step} className="flex items-center gap-3 rounded-2xl bg-[#f3f8f5] px-4 py-3"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d9f2e4] text-xs font-bold text-[#2b8c67]">{index + 1}</span><span className="text-sm font-semibold text-[#31564b]">{step}</span></div>)}
            </div>
            <button onClick={() => setActiveRole(null)} className="mt-6 w-full rounded-full bg-[#123b35] px-5 py-3 text-sm font-semibold text-white">Continue to workspace <ArrowRight className="ml-2 inline h-4 w-4" /></button>
          </div>
        </div>
      )}
    </main>
  )
}

