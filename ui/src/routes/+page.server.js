import { addTodo, getTodos, removeTodo, clearTodos } from '$lib/server/database.js'

import postgres from "postgres";
const sql = postgres('postgres://username:password@database:5432/database');


    export async function load(){
        // const todos = getTodos()
        const todos = await sql`SELECT * FROM todos`;
        
        return {todos}
        
    }

    export const actions = {
        addTodo: async ({request}) => {
            const formData = await request.formData()
            const todo = formData.get('text')
            
            const result = await sql`INSERT INTO todos (todo) VALUES (${todo})`;
            
            // addTodo(todo)
            return {success: true}
        },
        removeTodo: async ({request}) => {
            const formData = await request.formData()
            const todoId = formData.get('id')
            
            const result = await sql`DELETE FROM todos WHERE id = (${todoId})`;
    
            // removeTodo(todoId)
            return {success: true} 
        },
        clearTodos: () => {
            clearTodos()
          }
    }
