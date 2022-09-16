import { error, type RequestHandler } from "@sveltejs/kit";
import { deleteBit, getObject, uploadBit } from "$lib/storage/gcloudInterface";
import { toObject } from "$lib/util/streamToObject";

export const GET:RequestHandler = async ({params: {id}})=>{
    if(!id) throw error(500, 'must include an id');
    const data = await getObject(id);

    return new Response(data);
}

export const PUT:RequestHandler = async({params: {id}, clientAddress, request: {body}})=>{
    if(!id) throw error(500, 'must include an id');
    if(!body) throw error(500, 'body needs to exist');
    const parsedBody = await toObject(body);
    const bitName = id;
    const bitData = {
        markdown: parsedBody.markdown,
        metadata: {
            sourceIP: clientAddress,
            ...parsedBody.metadata
        }
    }
    await uploadBit(bitName, bitData);
    return new Response('ok');
};

export const DELETE: RequestHandler = async({params: {id}})=>{
    if(!id) throw error(500, 'must include an id');

    await deleteBit(id);
    return new Response('ok');
}