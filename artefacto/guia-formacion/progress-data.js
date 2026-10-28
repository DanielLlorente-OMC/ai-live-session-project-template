/* Portable progress format; legacy checkbox array remains supported. */
(function(root){
 const ids=Array.from({length:10},(_,i)=>'paso-'+(i+1));
 function decode(value){
  if(Array.isArray(value)){if(value.length!==10||!value.every(x=>typeof x==='boolean'))throw Error('Formato antiguo no valido');return Object.fromEntries(ids.map((id,i)=>[id,value[i]]))}
  if(!value||typeof value!=='object'||value.app!=='ai-live-guide'||value.schemaVersion!==1||!value.steps||typeof value.steps!=='object'||Array.isArray(value.steps))throw Error('Este archivo no es una copia compatible del progreso');
  const entries=Object.entries(value.steps);if(!entries.length||entries.some(([id,v])=>!ids.includes(id)||typeof v!=='boolean'))throw Error('Los pasos del archivo no son validos');
  return Object.fromEntries(ids.map(id=>[id,value.steps[id]===true]));
 }
 function snapshot(values,currentStep){if(values.length!==10||!values.every(x=>typeof x==='boolean'))throw Error('Estado no valido');return {app:'ai-live-guide',schemaVersion:1,exportedAt:new Date().toISOString(),currentStep:Math.max(1,Math.min(10,Number(currentStep)||1)),steps:Object.fromEntries(ids.map((id,i)=>[id,values[i]]))}}
 function merge(current,incoming){return ids.map((id,i)=>current[i]===true||incoming[id]===true)}
 const api={ids,decode,snapshot,merge};root.TrainingProgress=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:this);
