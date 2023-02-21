import { createSlice } from '@reduxjs/toolkit';
import {
  BoardItemType, CharacterType, EnemyType, InventoryType,
} from '../app/types';

const initialState: BoardItemType[][] = [
  [
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '0-0',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '0-1',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '0-2',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '0-3',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '0-4',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '0-5',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '0-6',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '0-7',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '0-8',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '0-9',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '0-10',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '0-11',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '0-12',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '0-13',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '0-14',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '0-15',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '0-16',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '0-17',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '0-18',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '0-19',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '0-20',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '0-21',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '0-22',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '0-23',
    },
  ], //  0
  [
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '1-0',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '1-1', value: 'player',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '1-2',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '1-3',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '1-4',
    },
    {
      top: true, right: false, bottom: true, left: true, state: null, id: '1-5',
    },
    {
      top: false, right: true, bottom: true, left: false, state: null, id: '1-6',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '1-7',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '1-8', value: 'player',
    },
    {
      top: false, right: false, bottom: true, left: true, state: null, id: '1-9',
    },
    {
      top: true, right: true, bottom: true, left: false, state: null, id: '1-10',
    },
    {
      top: false, right: false, bottom: true, left: true, state: null, id: '1-11',
    },
    {
      top: false, right: true, bottom: true, left: false, state: null, id: '1-12',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '1-13',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '1-14',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '1-15',
    },
    {
      top: false, right: false, bottom: true, left: true, state: null, id: '1-16', value: 'player',
    },
    {
      top: true, right: true, bottom: true, left: false, state: null, id: '1-17',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '1-18',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '1-19',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '1-20',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '1-21',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '1-22',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '1-23',
    },
  ], //  1
  [
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '2-0',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '2-1',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '2-2',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '2-3',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '2-4',
    },
    {
      top: true, right: false, bottom: true, left: true, state: null, id: '2-5',
    },
    {
      top: true, right: true, bottom: true, left: false, state: null, id: '2-6',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '2-7',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '2-8',
    },
    {
      top: true, right: false, bottom: true, left: true, state: null, id: '2-9',
    },
    {
      top: true, right: true, bottom: true, left: false, state: null, id: '2-10',
    },
    {
      top: true, right: false, bottom: true, left: true, state: null, id: '2-11',
    },
    {
      top: true, right: true, bottom: true, left: false, state: null, id: '2-12',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '2-13',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '2-14',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '2-15',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '2-16',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '2-17',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '2-18',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '2-19',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '2-20',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '2-21',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '2-22',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '2-23',
    },
  ], //  2
  [
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '3-0',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '3-1',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '3-2',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '3-3',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '3-4',
    },
    {
      top: true, right: false, bottom: true, left: true, state: null, id: '3-5',
    },
    {
      top: true, right: true, bottom: true, left: false, state: null, id: '3-6',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '3-7',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '3-8',
    },
    {
      top: true, right: false, bottom: true, left: true, state: null, id: '3-9',
    },
    {
      top: true, right: true, bottom: true, left: false, state: null, id: '3-10',
    },
    {
      top: true, right: false, bottom: true, left: true, state: null, id: '3-11',
    },
    {
      top: true, right: true, bottom: true, left: false, state: null, id: '3-12',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '3-13',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '3-14',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '3-15',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '3-16',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '3-17',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '3-18',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '3-19',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '3-20',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '3-21',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '3-22',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '3-23',
    },
  ], //  3
  [
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '4-0',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '4-1',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '4-2',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '4-3',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '4-4',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '4-5',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '4-6',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '4-7',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '4-8',
    },
    {
      top: true, right: false, bottom: true, left: true, state: null, id: '4-9',
    },
    {
      top: true, right: true, bottom: true, left: false, state: null, id: '4-10',
    },
    {
      top: true, right: false, bottom: false, left: true, state: null, id: '4-11',
    },
    {
      top: true, right: true, bottom: false, left: false, state: null, id: '4-12',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '4-13',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '4-14',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '4-15',
    },
    {
      top: true, right: false, bottom: true, left: true, state: null, id: '4-16',
    },
    {
      top: true, right: true, bottom: true, left: false, state: null, id: '4-17',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '4-18',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '4-19',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '4-20',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '4-21',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '4-22',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '4-23',
    },
  ], //  4
  [
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '5-0',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '5-1',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '5-2',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '5-3',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '5-4',
    },
    {
      top: true, right: false, bottom: true, left: true, state: null, id: '5-5',
    },
    {
      top: true, right: true, bottom: true, left: false, state: null, id: '5-6',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '5-7',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '5-8',
    },
    {
      top: true, right: false, bottom: true, left: true, state: null, id: '5-9',
    },
    {
      top: true, right: false, bottom: true, left: false, state: null, id: '5-10',
    },
    {
      top: false, right: false, bottom: true, left: false, state: null, id: '5-11', value: 'player',
    },
    {
      top: false, right: true, bottom: true, left: false, state: null, id: '5-12',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '5-13',
    },
    {
      top: false, right: false, bottom: true, left: true, state: null, id: '5-14',
    },
    {
      top: true, right: true, bottom: true, left: false, state: null, id: '5-15',
    },
    {
      top: true, right: false, bottom: true, left: true, state: null, id: '5-16',
    },
    {
      top: true, right: true, bottom: true, left: false, state: null, id: '5-17',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '5-18',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '5-19',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '5-20',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '5-21',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '5-22',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '5-23',
    },
  ], //  5
  [
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '6-0',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '6-1',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '6-2',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '6-3',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '6-4',
    },
    {
      top: true, right: false, bottom: true, left: true, state: null, id: '6-5',
    },
    {
      top: true, right: true, bottom: false, left: false, state: null, id: '6-6',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '6-7',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '6-8',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '6-9',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '6-10',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '6-11',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '6-12',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '6-13',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '6-14',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '6-15',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '6-16',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '6-17',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '6-18',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '6-19',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '6-20',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '6-21', value: 'player',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '6-22',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '6-23',
    },
  ], //  6
  [
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '7-0',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '7-1',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '7-2',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '7-3',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '7-4',
    },
    {
      top: true, right: false, bottom: true, left: true, state: null, id: '7-5',
    },
    {
      top: false, right: true, bottom: true, left: false, state: null, id: '7-6',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '7-7',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '7-8',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '7-9',
    },
    {
      top: true, right: false, bottom: true, left: true, state: null, id: '7-10',
    },
    {
      top: true, right: true, bottom: true, left: false, state: null, id: '7-11',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '7-12',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '7-13',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '7-14',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '7-15',
    },
    {
      top: true, right: false, bottom: true, left: true, state: null, id: '7-16',
    },
    {
      top: true, right: true, bottom: true, left: false, state: null, id: '7-17',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '7-18',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '7-19',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '7-20',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '7-21',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '7-22',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '7-23',
    },
  ], //  7
  [
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '8-0',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '8-1',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '8-2',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '8-3',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '8-4',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '8-5',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '8-6',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '8-7',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '8-8',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '8-9',
    },
    {
      top: true, right: false, bottom: false, left: true, state: null, id: '8-10',
    },
    {
      top: true, right: true, bottom: true, left: false, state: null, id: '8-11',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '8-12',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '8-13',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '8-14',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '8-15',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '8-16',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '8-17',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '8-18',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '8-19',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '8-20',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '8-21',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '8-22',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '8-23',
    },
  ], //  8
  [
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '9-0',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '9-1',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '9-2',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '9-3',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '9-4',
    },
    {
      top: true, right: false, bottom: true, left: true, state: null, id: '9-5',
    },
    {
      top: true, right: true, bottom: true, left: false, state: null, id: '9-6',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '9-7',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '9-8',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '9-9',
    },
    {
      top: false, right: false, bottom: true, left: true, state: null, id: '9-10', value: 'player',
    },
    {
      top: true, right: true, bottom: true, left: false, state: null, id: '9-11',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '9-12',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '9-13',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '9-14',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '9-15',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '9-16',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '9-17',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '9-18',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '9-19',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '9-20',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '9-21',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '9-22',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '9-23',
    },
  ], //  9
  [
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '10-0',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '10-1',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '10-2',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '10-3',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '10-4',
    },
    {
      top: true, right: false, bottom: true, left: true, state: null, id: '10-5',
    },
    {
      top: true, right: true, bottom: true, left: false, state: null, id: '10-6',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '10-7',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '10-8',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '10-9',
    },
    {
      top: true, right: false, bottom: true, left: true, state: null, id: '10-10',
    },
    {
      top: true, right: true, bottom: true, left: false, state: null, id: '10-11',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '10-12',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '10-13',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '10-14',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '10-15',
    },
    {
      top: true, right: false, bottom: true, left: true, state: null, id: '10-16',
    },
    {
      top: true, right: true, bottom: true, left: false, state: null, id: '10-17',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '10-18',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '10-19',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '10-20',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '10-21',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '10-22',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '10-23',
    },
  ], //  10
  [
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '11-0',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '11-1',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '11-2',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '11-3',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '11-4',
    },
    {
      top: true, right: false, bottom: true, left: true, state: null, id: '11-5',
    },
    {
      top: true, right: true, bottom: false, left: false, state: null, id: '11-6',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '11-7',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '11-8',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '11-9',
    },
    {
      top: true, right: false, bottom: false, left: true, state: null, id: '11-10',
    },
    {
      top: true, right: true, bottom: false, left: false, state: null, id: '11-11',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '11-12',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '11-13',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '11-14',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '11-15',
    },
    {
      top: true, right: false, bottom: false, left: true, state: null, id: '11-16',
    },
    {
      top: true, right: true, bottom: true, left: false, state: null, id: '11-17',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '11-18',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '11-19',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '11-20',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '11-21',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '11-22',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '11-23',
    },
  ], //  11
  [
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '12-0',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '12-1',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '12-2',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '12-3',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '12-4',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '12-5',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '12-6',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '12-7',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '12-8',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '12-9',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '12-10',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '12-11',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '12-12',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '12-13',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '12-14',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '12-15',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '12-16',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '12-17',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '12-18',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '12-19',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '12-20',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '12-21',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '12-22',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '12-23',
    },
  ], //  12
  [
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '13-0',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '13-1',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '13-2',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '13-3',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '13-4',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '13-5',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '13-6',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '13-7',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '13-8',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '13-9',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '13-10',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '13-11',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '13-12',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '13-13',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '13-14',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '13-15',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '13-16',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '13-17',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '13-18',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '13-19',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '13-20',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '13-21',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '13-22',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '13-23',
    },
  ], //  13
  [
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '14-0',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '14-1',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '14-2',
    },
    {
      top: true, right: false, bottom: true, left: true, state: null, id: '14-3',
    },
    {
      top: false, right: true, bottom: true, left: false, state: null, id: '14-4',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '14-5',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '14-6',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '14-7',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '14-8',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '14-9',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '14-10',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '14-11',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '14-12',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '14-13',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '14-14',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '14-15',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '14-16',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '14-17',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '14-18',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '14-19',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '14-20',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '14-21',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '14-22',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '14-23',
    },
  ], //  14
  [
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '15-0',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '15-1',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '15-2',
    },
    {
      top: true, right: false, bottom: true, left: true, state: null, id: '15-3',
    },
    {
      top: true, right: true, bottom: true, left: false, state: null, id: '15-4',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '15-5',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '15-6',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '15-7',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '15-8',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '15-9',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '15-10',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '15-11',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '15-12',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '15-13',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '15-14',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '15-15', value: 'finish',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '15-16', value: 'finish',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '15-17', value: 'finish',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '15-18', value: 'finish',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '15-19', value: 'finish',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '15-20',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '15-21',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '15-22',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '15-23',
    },
  ], //  15
  [
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '16-0',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '16-1',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '16-2',
    },
    {
      top: true, right: false, bottom: true, left: true, state: null, id: '16-3',
    },
    {
      top: true, right: true, bottom: true, left: false, state: null, id: '16-4',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '16-5',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '16-6',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '16-7',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '16-8',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '16-9',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '16-10',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '16-11',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '16-12',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '16-13',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '16-14',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '16-15', value: 'finish',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '16-16', value: 'finish',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '16-17', value: 'finish',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '16-18', value: 'finish',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '16-19', value: 'player',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '16-20',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '16-21',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '16-22',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '16-23',
    },
  ], //  16
  [
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '17-0',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '17-1',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '17-2',
    },
    {
      top: true, right: false, bottom: true, left: true, state: null, id: '17-3',
    },
    {
      top: true, right: true, bottom: true, left: false, state: null, id: '17-4', value: 'player',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '17-5',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '17-6',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '17-7',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '17-8',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '17-9',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '17-10',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '17-11',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '17-12',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '17-13',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '17-14',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '17-15', value: 'finish',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '17-16', value: 'finish',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '17-17', value: 'finish',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '17-18', value: 'finish',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '17-19', value: 'finish',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '17-20',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '17-21',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '17-22',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '17-23',
    },
  ], //  17
  [
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '18-0',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '18-1',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '18-2',
    },
    {
      top: true, right: false, bottom: true, left: true, state: null, id: '18-3',
    },
    {
      top: true, right: true, bottom: false, left: false, state: null, id: '18-4',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '18-5',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '18-6',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '18-7',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '18-8',
    },
    {
      top: true, right: true, bottom: false, left: true, state: null, id: '18-9',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '18-10',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '18-11',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '18-12',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '18-13',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '18-14',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '18-15',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '18-16',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '18-17',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '18-18',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '18-19',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '18-20',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '18-21',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '18-22',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '18-23',
    },
  ], //  18
  [
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '19-0',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '19-1',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '19-2',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '19-3',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '19-4',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '19-5',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '19-6',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '19-7',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '19-8',
    },
    {
      top: false, right: true, bottom: true, left: true, state: null, id: '19-9',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '19-10',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '19-11',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '19-12',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '19-13',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '19-14',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '19-15',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '19-16',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '19-17',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '19-18',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '19-19',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '19-20',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '19-21',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '19-22',
    },
    {
      top: true, right: true, bottom: true, left: true, state: null, id: '19-23',
    },
  ], //  19
];

const gameBoardSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setNewGameField(state, actions: {
      payload: BoardItemType[][];
      type: string;
    }) {
      return actions.payload;
    },
    setVisibleCard(state, actions: {
      payload: string;
      type: string;
    }) {
      const newState = state.map((row) => row.map((ceil) => {
        if (ceil.state && ceil.id === actions.payload) {
          const newCeil = { ...ceil, state: { ...ceil.state, isVisible: true } };
          return newCeil;
        }
        return ceil;
      }));
      return newState;
    },

    moveCharacter(state, actions: {
      payload: {
        from: string,
        to: string,
        body: CharacterType | EnemyType | null
      };
      type: string;
    }) {
      const newState = state.map((row) => row.map((ceil) => {
        if (ceil.id === actions.payload.from) {
          const newCeil = { ...ceil, state: null };
          return newCeil;
        }
        if (ceil.id === actions.payload.to) {
          const newCeil = { ...ceil, state: actions.payload.body };
          return newCeil;
        }
        return ceil;
      }));

      return newState;
    },
    removeCardState(state, actions: {
      payload: string;
      type: string;
    }) {
      const newState = state.map((row) => row.map((ceil) => {
        if (ceil.id === actions.payload) {
          const newCeil = { ...ceil, state: null };
          return newCeil;
        }
        return ceil;
      }));

      return newState;
    },
    addPlankState(state, actions: {
      payload: string;
      type: string;
    }) {
      const plank = {
        category: 'thing',
        type: 'plank',
        name: 'Доски',
        img: 'things/plank.png',
        description: 'С их помощью можно забить окно или дверь. Для этого, пройдя через дверь или окно, игрок кладёт карточку досок (найденную раньше) на клетку с изображением двери или окна',
        isVisible: true,
        count: 8,
      };
      const newState = state.map((row) => row.map((ceil) => {
        if (ceil.id === actions.payload) {
          const newCeil = { ...ceil, state: plank };
          return newCeil;
        }
        return ceil;
      }));

      return newState;
    },

    setDiedBodyInventory(state, actions: {
      payload: {
        id: string;
        value: InventoryType
      };
      type: string;
    }) {
      const newCeilState = {
        type: 'deadBody',
        category: 'deadBody',
        img: '',
        isVisible: true,
        value: actions.payload.value,
      };

      const newState = state.map((row) => row.map((ceil) => {
        if (ceil.id === actions.payload.id) {
          const newCeil = { ...ceil, state: newCeilState };
          return newCeil;
        }
        return ceil;
      }));

      return newState;
    },
  },
});

export const {
  setNewGameField,
  setVisibleCard, moveCharacter, removeCardState, addPlankState, setDiedBodyInventory,
} = gameBoardSlice.actions;
export default gameBoardSlice.reducer;
