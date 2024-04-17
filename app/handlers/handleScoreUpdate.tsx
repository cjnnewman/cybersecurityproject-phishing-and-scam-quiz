'use server'

import { sql } from '@vercel/postgres';
import { getServerSession } from 'next-auth';

export async function UpdateTestScore( test_type : string, score : number, max_score : number) {
    const session = await getServerSession();

    const email = session?.user?.email;

    const response = await sql`
        INSERT INTO scores (test_type, email, score, max_score, timestamp)
        VALUES (${test_type}, ${email}, ${score}, 5, NOW())
    `;

}
