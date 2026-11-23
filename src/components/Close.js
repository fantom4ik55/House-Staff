 
 
function Close ({onClick}) {
    return ( 
         <>
        <svg className='close' onClick={onClick}   xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> 
            <rect x="1" y="1" width="22" height="22" rx="5" ry="5" fill="#e0e0e0" /> 
            <path d="M8 8 L16 16 M16 8 L8 16" 
                stroke="#333" 
                stroke-width="2" 
                stroke-linecap="round" />
        </svg>
       </>
     );
}

export default Close;
