'use server'

import { sql } from '@vercel/postgres';
import { getServerSession } from 'next-auth';

export async function GetTestScores( test_type : string ) {
    const session = await getServerSession();

    const email = session?.user?.email;

    const response = await sql`
        SELECT score 
        FROM scores
        WHERE email = ${email}
        AND test_type = ${test_type}
        ORDER BY test_id DESC
        LIMIT 1;
    `;

    if (response.rows.length > 0) {
        const score = response.rows[0].score
        return score;
    }
    else {
        return null;
    }

}