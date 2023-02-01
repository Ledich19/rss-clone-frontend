import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  [
    { top: true, right: true, bottom: true, left: true, state: {}, id: '00' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '01' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '02' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '03' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '04' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '05' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '06' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '07' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '08' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '09' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '010' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '011' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '012' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '013' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '014' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '015' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '016' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '017' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '018' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '019' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '020' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '021' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '022' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '023' },
  ], //0
  [
    { top: true, right: true, bottom: true, left: true, state: {}, id: '10' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '11' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '12' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '13' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '14' },
    { top: true, right: false, bottom: true, left: true, state: {}, id: '15' },
    { top: false, right: true, bottom: true, left: false, state: {}, id: '16' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '17' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '18' },
    { top: false, right: false, bottom: true, left: true, state: {}, id: '19' },
    { top: true, right: true, bottom: true, left: false, state: {}, id: '110' },
    { top: false, right: false, bottom: true, left: true, state: {}, id: '111' },
    { top: false, right: true, bottom: true, left: false, state: {}, id: '112' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '113' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '114' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '115' },
    { top: false, right: false, bottom: true, left: true, state: {}, id: '116' },
    { top: true, right: true, bottom: true, left: false, state: {}, id: '117' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '118' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '119' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '120' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '121' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '122' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '123' },
  ], //1
  [
    { top: true, right: true, bottom: true, left: true, state: {}, id: '20' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '21' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '22' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '23' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '24' },
    { top: true, right: false, bottom: true, left: true, state: {}, id: '25' },
    { top: true, right: true, bottom: true, left: false, state: {}, id: '26' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '27' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '28' },
    { top: true, right: false, bottom: true, left: true, state: {}, id: '29' },
    { top: true, right: true, bottom: true, left: false, state: {}, id: '210' },
    { top: true, right: false, bottom: true, left: true, state: {}, id: '211' },
    { top: true, right: true, bottom: true, left: false, state: {}, id: '212' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '213' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '214' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '215' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '216' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '217' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '218' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '219' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '220' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '221' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '222' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '223' },
  ], //2
  [
    { top: true, right: true, bottom: true, left: true, state: {}, id: '30' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '31' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '32' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '33' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '34' },
    { top: true, right: false, bottom: true, left: true, state: {}, id: '35' },
    { top: true, right: true, bottom: true, left: false, state: {}, id: '36' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '37' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '38' },
    { top: true, right: false, bottom: true, left: true, state: {}, id: '39' },
    { top: true, right: true, bottom: true, left: false, state: {}, id: '310' },
    { top: true, right: false, bottom: true, left: true, state: {}, id: '311' },
    { top: true, right: true, bottom: true, left: false, state: {}, id: '312' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '313' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '314' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '315' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '316' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '317' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '318' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '319' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '320' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '321' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '322' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '323' },
  ], //3
  [
    { top: true, right: true, bottom: true, left: true, state: {}, id: '40' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '41' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '42' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '43' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '44' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '45' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '46' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '47' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '48' },
    { top: true, right: false, bottom: true, left: true, state: {}, id: '49' },
    { top: true, right: true, bottom: true, left: false, state: {}, id: '410' },
    { top: true, right: false, bottom: false, left: true, state: {}, id: '411' },
    { top: true, right: true, bottom: false, left: false, state: {}, id: '412' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '413' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '414' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '415' },
    { top: true, right: false, bottom: true, left: true, state: {}, id: '416' },
    { top: true, right: true, bottom: true, left: false, state: {}, id: '417' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '418' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '419' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '420' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '421' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '422' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '423' },
  ], //4
  [
    { top: true, right: true, bottom: true, left: true, state: {}, id: '50' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '51' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '52' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '53' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '54' },
    { top: true, right: false, bottom: true, left: true, state: {}, id: '55' },
    { top: true, right: true, bottom: true, left: false, state: {}, id: '56' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '57' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '58' },
    { top: true, right: false, bottom: true, left: true, state: {}, id: '59' },
    { top: true, right: false, bottom: true, left: false, state: {}, id: '510' },
    { top: false, right: false, bottom: true, left: false, state: {}, id: '511' },
    { top: false, right: true, bottom: true, left: false, state: {}, id: '512' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '513' },
    { top: false, right: false, bottom: true, left: true, state: {}, id: '514' },
    { top: true, right: true, bottom: true, left: false, state: {}, id: '515' },
    { top: true, right: false, bottom: true, left: true, state: {}, id: '516' },
    { top: true, right: true, bottom: true, left: false, state: {}, id: '517' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '518' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '519' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '520' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '521' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '522' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '523' },
  ], //5
  [
    { top: true, right: true, bottom: true, left: true, state: {}, id: '60' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '61' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '62' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '63' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '64' },
    { top: true, right: false, bottom: true, left: true, state: {}, id: '65' },
    { top: true, right: true, bottom: false, left: false, state: {}, id: '66' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '67' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '68' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '69' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '610' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '611' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '612' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '613' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '614' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '615' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '616' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '617' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '618' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '619' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '620' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '621' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '622' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '623' },
  ], //6
  [
    { top: true, right: true, bottom: true, left: true, state: {}, id: '70' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '71' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '72' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '73' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '74' },
    { top: true, right: false, bottom: true, left: true, state: {}, id: '75' },
    { top: false, right: true, bottom: true, left: false, state: {}, id: '76' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '77' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '78' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '79' },
    { top: true, right: false, bottom: true, left: true, state: {}, id: '710' },
    { top: true, right: true, bottom: true, left: false, state: {}, id: '711' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '712' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '713' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '714' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '715' },
    { top: true, right: false, bottom: true, left: true, state: {}, id: '716' },
    { top: true, right: true, bottom: true, left: false, state: {}, id: '717' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '718' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '719' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '720' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '721' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '722' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '723' },
  ], //7
  [
    { top: true, right: true, bottom: true, left: true, state: {}, id: '80' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '81' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '82' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '83' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '84' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '85' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '86' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '87' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '88' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '89' },
    { top: true, right: false, bottom: false, left: true, state: {}, id: '810' },
    { top: true, right: true, bottom: true, left: false, state: {}, id: '811' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '812' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '813' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '814' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '815' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '816' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '817' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '818' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '819' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '820' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '821' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '822' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '823' },
  ], //8
  [
    { top: true, right: true, bottom: true, left: true, state: {}, id: '90' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '91' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '92' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '93' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '94' },
    { top: true, right: false, bottom: true, left: true, state: {}, id: '95' },
    { top: true, right: true, bottom: true, left: false, state: {}, id: '96' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '97' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '98' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '99' },
    { top: false, right: false, bottom: true, left: true, state: {}, id: '910' },
    { top: true, right: true, bottom: true, left: false, state: {}, id: '911' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '912' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '913' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '914' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '915' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '916' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '917' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '918' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '919' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '920' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '921' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '922' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '923' },
  ], //9
  [
    { top: true, right: true, bottom: true, left: true, state: {}, id: '100' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '101' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '102' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '103' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '104' },
    { top: true, right: false, bottom: true, left: true, state: {}, id: '105' },
    { top: true, right: true, bottom: true, left: false, state: {}, id: '106' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '107' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '108' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '109' },
    { top: true, right: false, bottom: true, left: true, state: {}, id: '1010' },
    { top: true, right: true, bottom: true, left: false, state: {}, id: '1011' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1012' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1013' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1014' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1015' },
    { top: true, right: false, bottom: true, left: true, state: {}, id: '1016' },
    { top: true, right: true, bottom: true, left: false, state: {}, id: '1017' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1018' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1019' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1020' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1021' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1022' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1023' },
  ], //10
  [
    { top: true, right: true, bottom: true, left: true, state: {}, id: '110' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '111' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '112' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '113' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '114' },
    { top: true, right: false, bottom: true, left: true, state: {}, id: '115' },
    { top: true, right: true, bottom: false, left: false, state: {}, id: '116' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '117' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '118' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '119' },
    { top: true, right: false, bottom: false, left: true, state: {}, id: '1110' },
    { top: true, right: true, bottom: false, left: false, state: {}, id: '1111' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1112' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '1113' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '1114' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '1115' },
    { top: true, right: false, bottom: false, left: true, state: {}, id: '1116' },
    { top: true, right: true, bottom: true, left: false, state: {}, id: '1117' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1118' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1119' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1120' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1121' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1122' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1123' },
  ], //11
  [
    { top: true, right: true, bottom: true, left: true, state: {}, id: '120' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '121' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '122' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '123' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '124' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '125' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '126' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '127' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '128' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '129' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '1210' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '1211' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1212' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '1213' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '1214' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '1215' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '1216' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1217' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1218' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1219' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1220' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1221' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1222' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1223' },
  ], //12
  [
    { top: true, right: true, bottom: true, left: true, state: {}, id: '130' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '131' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '132' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '133' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '134' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '135' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '136' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '137' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '138' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '139' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1310' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1311' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1312' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1313' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1314' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1315' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1316' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1317' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1318' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1319' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1320' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1321' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1322' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1323' },
  ], //13
  [
    { top: true, right: true, bottom: true, left: true, state: {}, id: '140' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '141' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '142' },
    { top: true, right: false, bottom: true, left: true, state: {}, id: '143' },
    { top: false, right: true, bottom: true, left: false, state: {}, id: '144' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '145' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '146' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '147' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '148' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '149' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1410' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1411' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1412' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1413' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1414' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1415' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1416' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1417' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1418' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1419' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1420' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1421' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1422' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1423' },
  ], //14
  [
    { top: true, right: true, bottom: true, left: true, state: {}, id: '150' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '151' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '152' },
    { top: true, right: false, bottom: true, left: true, state: {}, id: '153' },
    { top: true, right: true, bottom: true, left: false, state: {}, id: '154' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '155' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '156' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '157' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '158' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '159' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1510' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1511' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1512' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1513' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1514' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1515' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1516' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1517' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1518' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1519' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1520' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1521' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1522' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1523' },
  ], //15
  [
    { top: true, right: true, bottom: true, left: true, state: {}, id: '160' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '161' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '162' },
    { top: true, right: false, bottom: true, left: true, state: {}, id: '163' },
    { top: true, right: true, bottom: true, left: false, state: {}, id: '164' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '165' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '166' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '167' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '168' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '169' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1610' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1611' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1612' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1613' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1614' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1615' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1616' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1617' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1618' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1619' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1620' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1621' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1622' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1623' },
  ], //16
  [
    { top: true, right: true, bottom: true, left: true, state: {}, id: '170' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '171' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '172' },
    { top: true, right: false, bottom: true, left: true, state: {}, id: '173' },
    { top: true, right: true, bottom: true, left: false, state: {}, id: '174' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '175' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '176' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '177' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '178' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '179' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1710' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1711' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1712' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1713' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1714' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1715' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1716' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1717' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1718' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1719' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1720' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1721' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1722' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1723' },
  ], //17
  [
    { top: true, right: true, bottom: true, left: true, state: {}, id: '180' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '181' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '182' },
    { top: true, right: false, bottom: true, left: true, state: {}, id: '183' },
    { top: true, right: true, bottom: false, left: false, state: {}, id: '184' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '185' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '186' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '187' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '188' },
    { top: true, right: true, bottom: false, left: true, state: {}, id: '189' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1810' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1811' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1812' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1813' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1814' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1815' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1816' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1817' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1818' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1819' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1820' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1821' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1822' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1823' },
  ], //18
  [
    { top: true, right: true, bottom: true, left: true, state: {}, id: '190' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '191' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '192' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '193' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '194' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '195' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '196' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '197' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '198' },
    { top: false, right: true, bottom: true, left: true, state: {}, id: '199' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1910' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1911' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1912' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1913' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1914' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1915' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1916' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1917' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1918' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1919' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1920' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1921' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1922' },
    { top: true, right: true, bottom: true, left: true, state: {}, id: '1923' },
  ], //19
];

const gameBoardSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    getGameBoard(state) {
      return state;
    },
  },
});

export const { getGameBoard } = gameBoardSlice.actions;
export default gameBoardSlice.reducer;
