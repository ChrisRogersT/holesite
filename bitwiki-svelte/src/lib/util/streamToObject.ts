export const toObject = async(stream: ReadableStream<any>)=>{
    const reader = stream.getReader();
    let charsReceived = 0;
    let result = '';

    let done = false;
    do {
        const chunk = await reader.read();
        done = chunk.done;
        if(done) break;
        charsReceived += chunk.value.length;
        result += chunk.value;
    } while (!done);

    return JSON.parse(result);
}