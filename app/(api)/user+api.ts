import { neon } from '@neondatabase/serverless'


const sql = neon(
    `${process.env.DATABASE_URL}`
)


export async function POST(request: Request) {
    try {
        const { name, email, clerkId } = await request.json()
    
        if (!name || !email || !clerkId) {
            return Response.json({ error: "Missing required Field" }, { status: 400 })
        }
    
    
        const response = await sql`
                INSERT INTO users(name , email , clerk_id)
                VALUES (${name} ,  ${email} ,${clerkId})
            `
    
        return new Response (JSON.stringify({data : response}) , {status : 201})
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ error}), { status: 500 })        
    }
}