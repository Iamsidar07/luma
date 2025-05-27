'use client'

import { useState } from "react"
import { Button } from "./ui/button"
import { Loader2 } from "lucide-react"


const DownloadVideoButton = ( ) => {
    const [isLoading, setIsLoading] = useState(false)

    const handleDownloading = async()=>{
        setIsLoading(true)
        try {
            await fetch('/api/render');
        } catch (error) {
            console.log('FAILED DOWNLOAD')
            console.error(error)
        }finally{
            setIsLoading(false)
        }

    }
  return (
    <Button onClick={handleDownloading} className="mt-6 w-full">
        {isLoading && <Loader2 className="w-5 h-5 animate-spin"/>}
        Download
    </Button>
  )
}

export default DownloadVideoButton