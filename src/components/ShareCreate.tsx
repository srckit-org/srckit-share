import { useState } from 'react';import { TextField,Paper,Typography,Button,Chip,IconButton,Tooltip } from '@mui/material';import ContentCopyIcon from '@mui/icons-material/ContentCopy';
export default function ShareCreate(){const[text,setText]=useState('');const[encoded,setEncoded]=useState('');const[copied,setCopied]=useState(false);
const encode=()=>{try{setEncoded(btoa(unescape(encodeURIComponent(text))));}catch{setEncoded(btoa(text));}};
const decode=()=>{try{setText(decodeURIComponent(escape(atob(encoded))));}catch{setText(atob(encoded));}};
const shareUrl=encoded?`${window.location.origin}${window.location.pathname}?s=${encodeURIComponent(encoded)}`:'';
return(<div className="p-4 max-w-4xl mx-auto"><Typography variant="h5" sx={{fontWeight:600}} gutterBottom>Share Content</Typography>
<Typography variant="body2" color="text.secondary" className="mb-4">Encode text as base64 to create shareable links. Content is encoded in the URL, not stored on any server.</Typography>
<TextField label="Text" multiline minRows={8} maxRows={16} value={text} onChange={e=>setText(e.target.value)} fullWidth className="font-mono mb-3"/>
<div className="flex gap-2 mb-3"><Button variant="contained" onClick={encode}>Encode</Button><Button variant="outlined" onClick={decode} disabled={!encoded}>Decode</Button></div>
{encoded&&<Paper variant="outlined" className="p-3"><Typography variant="subtitle2" sx={{fontWeight:600}}>Encoded (base64)</Typography><pre className="text-xs font-mono break-all bg-gray-100 p-2 rounded mt-1">{encoded}</pre>
{shareUrl&&<div className="mt-2 flex items-center gap-2"><Chip label="Share URL" size="small" color="primary"/><code className="text-xs break-all flex-1">{shareUrl.slice(0,80)}...</code>
<Tooltip title={copied?'Copied!':'Copy'}><IconButton size="small" onClick={()=>{navigator.clipboard.writeText(shareUrl);setCopied(true);setTimeout(()=>setCopied(false),2000);}}><ContentCopyIcon fontSize="small"/></IconButton></Tooltip></div>}</Paper>}</div>);}
