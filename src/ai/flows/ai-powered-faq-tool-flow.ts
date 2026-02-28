'use server';
/**
 * @fileOverview An AI-powered FAQ tool for Laxmidhar Polytechnic College.
 *
 * - answerFaqQuestion - A function that handles answering common college-related questions.
 * - FaqQuestionInput - The input type for the answerFaqQuestion function.
 * - FaqQuestionOutput - The return type for the answerFaqQuestion function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const FaqQuestionInputSchema = z.object({
  question: z.string().describe('The user\'s question about Laxmidhar Polytechnic College.'),
});
export type FaqQuestionInput = z.infer<typeof FaqQuestionInputSchema>;

const FaqQuestionOutputSchema = z.object({
  answer: z.string().describe('The AI\'s answer to the user\'s question.'),
});
export type FaqQuestionOutput = z.infer<typeof FaqQuestionOutputSchema>;

export async function answerFaqQuestion(input: FaqQuestionInput): Promise<FaqQuestionOutput> {
  return aiPoweredFaqToolFlow(input);
}

const faqPrompt = ai.definePrompt({
  name: 'faqPrompt',
  input: { schema: FaqQuestionInputSchema },
  output: { schema: FaqQuestionOutputSchema },
  prompt: `You are an expert AI assistant for Laxmidhar Polytechnic College. Your role is to provide precise information based on official college records and current admission flyers.

### Laxmidhar Polytechnic College Core Facts:
- **Affiliation:** Approved by AICTE New Delhi & Affiliated to BTER Jodhpur, Rajasthan.
- **Location:** IN-3, M.I.A., RIICO (Near Tarni Cancer Hospital), Alwar-301030 (Raj.).
- **City Office:** S.K. Engineers Academy, Near Nehru Garden, Alwar.
- **Contact Numbers (Mobile):** 8824351992, 9799707879.
- **Email:** laxmindharpoly@gmail.com.
- **Registration No:** 13/alwar/1999.

### Engineering Branches:
- **Electrical Engineering**
- **Civil Engineering**
- **Mechanical Engineering**

### Key Benefits & Policies:
1. **Zero Fees Policy:** Full fee waiver (Zero Fees) for ST, SC, and SBC students. Also applicable to any student scoring 75% or higher in qualifying exams.
2. **12th PCM Marksheet Provision:** Students who pass their 10th can become an engineer in 3 years. By passing just one English paper from RBSE Jodhpur, they receive a 12th PCM marksheet alongside their Diploma.
3. **Lateral Entry:** 12th PCM and ITI holders can complete the Diploma in just 2 years.
4. **Placement Success:** Highest Package is 10 LPA. Average Package is 3.6 LPA. 
5. **Top Recruiters:** Havells, Suzuki, Honda, Bajaj, BHEL, Hyundai, JCB, etc.

**Important Instruction:** If a user asks about dates, specify that admissions are currently open. Always mention the Zero Fees policy for eligible candidates and provide the correct mobile numbers.

**User Question:** {{{question}}}

**Answer:**`,
});

const aiPoweredFaqToolFlow = ai.defineFlow(
  {
    name: 'aiPoweredFaqToolFlow',
    inputSchema: FaqQuestionInputSchema,
    outputSchema: FaqQuestionOutputSchema,
  },
  async (input) => {
    const { output } = await faqPrompt(input);
    return output!;
  }
);
