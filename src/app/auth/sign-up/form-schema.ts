import { z } from 'zod'

export const authSignUpFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    confirm_password: z.string().min(6),
}).superRefine(({ confirm_password, password }, ctx) => {
    if (confirm_password !== password) {
        ctx.addIssue({
            code: 'custom',
            message: 'The passwords did not match',
            path: ['confirmPassword']
        });
    }
});

export type AuthSignUpFormData = z.infer<typeof authSignUpFormSchema>