"use client";

import { useEffect, useState } from "react";
import { albra } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogClose,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface NewsDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    date: string;
    description: string;
    content?: string;
    markdownFile?: string;
    htmlFile?: string;
    imageUrl: string;
}

export function NewsDialog({
    open,
    onOpenChange,
    title,
    date,
    description,
    content,
    markdownFile,
    htmlFile,
    imageUrl,
}: NewsDialogProps) {
    const [fileContent, setFileContent] = useState<string>("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (open && (markdownFile || htmlFile)) {
            setLoading(true);
            const fileToLoad = htmlFile || markdownFile;
            fetch(fileToLoad!)
                .then(res => res.text())
                .then(text => {
                    setFileContent(text);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Error loading content:", err);
                    setLoading(false);
                });
        }
    }, [open, markdownFile, htmlFile]);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-7xl w-[90vw] max-h-[90vh] h-[85vh] overflow-auto p-0 border-0 bg-white">
                <div className="relative h-full flex flex-col">
               
                    
                    <div className="flex-1 overflow-auto">
                        <div className="bg-[#F5E6D3] h-full overflow-y-auto p-8 md:p-12">
                            <h1 className={cn(
                                "text-4xl text-[#8B4513] mb-6 leading-tight",
                                albra.className
                            )}>
                                {title}
                            </h1>
                            
                            <p className="text-gray-600 mb-4">{date}</p>
                            
                            <p className="text-gray-700 mb-6 italic">
                                {description}
                            </p>
                            
                            {loading ? (
                                <div className="text-gray-600">Đang tải nội dung...</div>
                            ) : (
                                <div className="prose prose-lg max-w-none">
                                    {htmlFile ? (
                                        <div 
                                            className="html-content"
                                            dangerouslySetInnerHTML={{ 
                                                __html: processHtmlContent(fileContent, htmlFile) 
                                            }}
                                        />
                                    ) : markdownFile ? (
                                        <ReactMarkdown 
                                            remarkPlugins={[remarkGfm]}
                                            components={{
                                                h1: ({children}) => <h1 className="text-2xl font-bold text-[#8B4513] mb-4">{children}</h1>,
                                                h2: ({children}) => <h2 className="text-xl font-semibold text-[#8B4513] mb-3 mt-6">{children}</h2>,
                                                h3: ({children}) => <h3 className="text-lg font-semibold text-[#8B4513] mb-2 mt-4">{children}</h3>,
                                                p: ({children}) => <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>,
                                                ul: ({children}) => <ul className="list-disc pl-6 mb-4 text-gray-700">{children}</ul>,
                                                li: ({children}) => <li className="mb-2">{children}</li>,
                                                strong: ({children}) => <strong className="font-semibold text-[#8B4513]">{children}</strong>,
                                                img: ({src, alt}) => {
                                                    if (src?.startsWith('data:')) return null;
                                                    return (
                                                        <div className="my-6">
                                                            <Image 
                                                                src={src || ''} 
                                                                alt={alt || ''} 
                                                                width={600} 
                                                                height={400}
                                                                className="rounded-lg w-full h-auto"
                                                            />
                                                        </div>
                                                    );
                                                },
                                            }}
                                        >
                                            {fileContent}
                                        </ReactMarkdown>
                                    ) : content ? (
                                        <div className="space-y-4">
                                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                                {content}
                                            </p>
                                        </div>
                                    ) : null}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

// Process HTML content to extract body and fix image paths
function processHtmlContent(html: string, htmlFilePath?: string): string {
    // Extract body content
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let content = bodyMatch ? bodyMatch[1] : html;
    
    // Remove the first empty div and title that's already shown
    content = content.replace(/<div><p[^>]*class="[^"]*c4\s+c6[^"]*"[^>]*>.*?<\/p><\/div>/g, '');
    content = content.replace(/<p[^>]*class="[^"]*c4[^"]*"[^>]*><span[^>]*class="[^"]*c0\s+c9[^"]*"[^>]*>.*?<\/span><\/p>/g, '');
    
    // Fix image paths to be relative to the HTML file location
    if (htmlFilePath) {
        const folderPath = htmlFilePath.substring(0, htmlFilePath.lastIndexOf('/'));
        content = content.replace(/src="images\//g, `src="${folderPath}/images/`);
    }
    
    // Add custom styles for the content
    const styles = `
        <style>
            .html-content { 
                color: #374151;
                line-height: 1.8;
            }
            .html-content h3 { 
                color: #8B4513;
                font-size: 1.25rem;
                font-weight: 600;
                margin-top: 1.5rem;
                margin-bottom: 1rem;
            }
            .html-content p {
                margin-bottom: 1rem;
                color: #374151;
            }
            .html-content ul {
                list-style-type: disc;
                padding-left: 1.5rem;
                margin-bottom: 1rem;
            }
            .html-content li {
                margin-bottom: 0.5rem;
                color: #374151;
            }
            .html-content .c0 {
                font-weight: 600;
                color: #8B4513;
            }
            .html-content img {
                max-width: 100%;
                height: auto;
                border-radius: 0.5rem;
                margin: 1.5rem 0;
            }
        </style>
    `;
    
    return styles + content;
}