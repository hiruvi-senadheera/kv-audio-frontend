import { createClient } from "@supabase/supabase-js"

const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kd2lzb2V0dW5na2N6amVqcW5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTUxNTI3NzIsImV4cCI6MjExMDcyODc3Mn0.lzaMshsb0uWmkzLvpPZxlsL3_1IVJ_szMHmrAXavv0c"
const supabase_url = "https://mdwisoetungkczjejqnl.supabase.co"

const supabase = createClient(supabase_url, anon_key)

export default function mediaUpload(file){

    return new Promise((resolve, reject)=>{

        if(file == null){
            reject("No file selected")
        }

        const timestamp = new Date().getTime()
        const fileName = timestamp+file.name

        supabase.storage.from("images").upload(fileName,file,{
            cacheControl : '3600',
            upsert : false,
        }).then(()=>{
            const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
            resolve(publicUrl)
        }).catch(()=>{
            reject("Error uploading file")
        })

    })

}