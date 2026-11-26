/**
 * Personal details and links.
 * ⚠️ Replace every placeholder below before deploying.
 */
export const profile = {
  name: 'Rohit D Bellagi',
  firstName: 'Rohit',
  title: 'Senior SDET · QA Automation Engineer · Quality Engineering',
  currentRole: 'Member of Technical Staff 2 — QA Automation',
  company: 'Nutanix',

  email: 'rohitbellagi2@gmail.com',
  links: {
    github: 'https://github.com/rohitbellagi',
    linkedin: 'https://www.linkedin.com/in/rohit-bellagi/',
    /** Add your profile URL (e.g. 'https://leetcode.com/u/<username>') to show the LeetCode button. */
    leetcode: '' as string,
  },

  /** Place your PDF at public/resume/Rohit_D_Bellagi_Resume.pdf */
  resumeUrl: `${import.meta.env.BASE_URL}resume/Rohit_D_Bellagi_Resume.pdf`,
} as const
