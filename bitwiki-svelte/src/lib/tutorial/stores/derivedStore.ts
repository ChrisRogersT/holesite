import { derived } from 'svelte/store';
import { time } from './readableStore';

const start = new Date();

export const elapsed = derived(time, ($time) => Math.round(($time.getTime() - start.getTime()) / 1000));
