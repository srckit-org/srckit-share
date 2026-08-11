import { useState } from 'react';import { TextField,Paper,Typography,Button } from '@mui/material';
export default function ShareLinks(){const[url,setUrl]=useState('');const s=new URLSearchParams(window.location.search).get('s');
if(s){try{const decoded=decodeURIComponent(escape(atob(s)));if(!url)setUrl(decoded);}catch{}}
return(<div className="p-4 max-w-4xl mx-auto"><Typography variant="h5" sx={{fontWeight:600}} gutterBottom>Open Shared Link</Typography>
<TextField label="Paste shared URL or encoded text" multiline minRows={6} value={url} onChange={e=>setUrl(e.target.value)} fullWidth className="font-mono mb-3"/>
<Button variant="contained" onClick={()=>{try{const d=decodeURIComponent(escape(atob(url)));setUrl(d);}catch{try{setUrl(atob(url));}catch{}}}}>Decode</Button>
{url&&<Paper variant="outlined" className="p-4 mt-4"><pre className="m-0 text-sm whitespace-pre-wrap font-mono">{url}</pre></Paper>}</div>);}
