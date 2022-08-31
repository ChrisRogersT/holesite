<script lang='ts'>
    import ComponentBindingExample from "$lib/tutorial/inputs/ComponentBindingExample.svelte";
    import Card from "$lib/layout/Card.svelte";
    let textInput: string = '';
    let numberInput: number = 0;
    let checkedInput: boolean = false;
    const radioOptions: string[] = ['A', 'B', 'C'];
    let radioInput: string = radioOptions[0];
    let componentBindingExampleInput = '';
</script>

<Card>
    <h1>Bindings</h1>
    <div>
        <div>Text Input is {textInput}</div>
        <input bind:value={textInput}>
    </div>
    <div>
        <div>Number Input is {numberInput}</div>
        <input type=number bind:value={numberInput} min=0 max=10>
    </div>
    <div>
        <div>Checked Input is {checkedInput}</div>
        <input type=checkbox bind:checked={checkedInput}>
    </div>
    <div>
        <div>Radio Input is {radioInput}</div>
        {#each radioOptions as option}
            <label>
                <input type=radio bind:group={radioInput} name="radioInput" value={option}>
                {option}
            </label>
        {/each}
    </div>
    <div>
        <div>Component Binding Example input is {componentBindingExampleInput}</div>
        <ComponentBindingExample bind:value={componentBindingExampleInput} />
    </div>
</Card>

<style>

</style>