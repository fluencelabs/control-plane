/* eslint-disable */
// @ts-nocheck
/**
 *
 * This file is auto-generated. Do not edit manually: changes may be erased.
 * Generated by Aqua compiler: https://github.com/fluencelabs/aqua/.
 * If you find any bugs, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * Aqua version: 0.11.7
 *
 */

import {
    v5_callFunction as callFunction$$,
    v5_registerService as registerService$$,
} from '@fluencelabs/js-client.api';
    


// Services


// Functions
 

export function test(
    config?: {ttl?: number}
): Promise<string | null | null>;

export function test(
    peer: IFluenceClient$$,
    config?: {ttl?: number}
): Promise<string | null | null>;

 

export function remove_all(
    config?: {ttl?: number}
): Promise<string>;

export function remove_all(
    peer: IFluenceClient$$,
    config?: {ttl?: number}
): Promise<string>;

 

export function get_logs(
    config?: {ttl?: number}
): Promise<string[][]>;

export function get_logs(
    peer: IFluenceClient$$,
    config?: {ttl?: number}
): Promise<string[][]>;

 

export function inspect(
    config?: {ttl?: number}
): Promise<string>;

export function inspect(
    peer: IFluenceClient$$,
    config?: {ttl?: number}
): Promise<string>;

 

export function test_join(
    config?: {ttl?: number}
): Promise<string[]>;

export function test_join(
    peer: IFluenceClient$$,
    config?: {ttl?: number}
): Promise<string[]>;

 

export function joined_deals(
    config?: {ttl?: number}
): Promise<{ deal_id: string; spell_id: string; worker_id: string; }[][]>;

export function joined_deals(
    peer: IFluenceClient$$,
    config?: {ttl?: number}
): Promise<{ deal_id: string; spell_id: string; worker_id: string; }[][]>;

 

export function remove(
    config?: {ttl?: number}
): Promise<string>;

export function remove(
    peer: IFluenceClient$$,
    config?: {ttl?: number}
): Promise<string>;


/* eslint-enable */