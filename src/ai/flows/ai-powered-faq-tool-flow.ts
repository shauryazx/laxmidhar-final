'use server';
/**
 * @fileOverview An AI-powered FAQ tool for Laxmidhar Polytechnic College Connect.
 *
 * - answerFaqQuestion - A function that handles answering common college-related questions.
 * - FaqQuestionInput - The input type for the answerFaqQuestion function.
 * - FaqQuestionOutput - The return type for the answerFaqQuestion function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const FaqQuestionInputSchema = z.object({
  question: z.string().describe('The user\'s question about Laxmidhar Polytechnic College Connect.'),
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
  prompt: `You are an AI assistant for Laxmidhar Polytechnic College Connect. Your role is to provide accurate and helpful information about the college's admissions, academic programs, and general college details.

Use the following information to answer the user's questions:

### Laxmidhar Polytechnic College Information:

**College Name:** Laxmidhar Polytechnic College
**Mission/Vision:** To provide quality technical education and foster innovation, preparing students for successful careers.
**Location:** 1N-3 MIA RIICO, Near IET College, Mungaska, Alwar-301001, Rajasthan

**Academic Programs (Diploma Engineering):**
- Mechanical Engineering: 60 seats
- Electrical Engineering: 60 seats
- Civil Engineering: 60 seats

**Admissions:**
- Covers eligibility criteria, application process, and important dates. Specific dates may vary by academic year, so advise checking the official admissions portal for the latest information.

**Key Administrative Personnel:**
- Chairman: Mahendra Singh Choudhary
- Director: Nirma Choudhary
- Principal: Shahkool Khan
- HOD Civil Engineering: Nikita Jagid
- HOD Mechanical Engineering: Jya Seini
- HOD Electrical Engineering: Sunil Mahiwal

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
