import { getObject } from "$lib/storage/gcloudInterface"

type BitIDPageLoadInputs = {
    params:{
        id:string
    }
}

export async function load({params: {id}}: BitIDPageLoadInputs){
    try{
        const o = await getObject(id);
        return {
            id,
            author: o.author,
            markdown: o.markdown
        };
    } catch(e){
        return {id,error: true, message: e}
    }
}