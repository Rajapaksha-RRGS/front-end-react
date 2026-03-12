import React from 'react'
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_API_URL,
  import.meta.env.VITE_API_KEY
);

function mediaUplod(file) {
  const mediapromiss =  new Promise(
    (resolve, reject)=>{
        if(file==null){
            reject("file is null");
            return;
        }
        const name = new Date().getTime() + file.name;

        supabase.storage.from("a").upload(name,file,{
            upsert:false,
            cacheControl:"3600",
        }).then(response =>{
            const publicUrl = supabase.storage.from("a").getPublicUrl(name).data.publicUrl;
            resolve(publicUrl);
        }).catch(e =>{
            
            reject("error occure in supabase",e);
        })

    }
   
  )

    return mediapromiss;
}

export default mediaUplod
