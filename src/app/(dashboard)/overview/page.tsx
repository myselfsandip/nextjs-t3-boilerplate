import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { requireAuth } from '@/server/auth/check-auth';
import {
    FileUserIcon,
    FileEditIcon,
    CheckCircleIcon,
    TrendingUp,
    Download,
    Eye,
    Plus,
    BarChart3,
    Clock,
    Star,
    Target,
    Zap
} from 'lucide-react';
import Link from 'next/link';

export default async function page() {
    // await requireAuth();


    return (
        <div className='px-4 py-2'>
            {/* Welcome Header */}
            <div className='mb-8'>
                <h1 className='text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2'>
                    Welcome to yourDashboard! 🚀
                </h1>
                <p className='text-gray-600 dark:text-gray-400 text-lg'>
                    Create Your things and analyze your stats
                </p>
            </div>

            {/* Quick Stats */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
                <Card className='bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 border-0 text-white shadow-lg dark:shadow-blue-900/20'>
                    <CardContent className='p-6'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-blue-100 dark:text-blue-200 text-sm font-medium'>Test1</p>
                                <p className='text-2xl font-bold'>8</p>
                                <p className='text-xs text-blue-200 dark:text-blue-300 mt-1'>+3 this week</p>
                            </div>
                            <FileUserIcon className='h-8 w-8 text-blue-200 dark:text-blue-300' />
                        </div>
                    </CardContent>
                </Card>

                <Card className='bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 border-0 text-white shadow-lg dark:shadow-emerald-900/20'>
                    <CardContent className='p-6'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-emerald-100 dark:text-emerald-200 text-sm font-medium'>Test2</p>
                                <p className='text-2xl font-bold'>12</p>
                                <p className='text-xs text-emerald-200 dark:text-emerald-300 mt-1'>+5 this week</p>
                            </div>
                            <FileEditIcon className='h-8 w-8 text-emerald-200 dark:text-emerald-300' />
                        </div>
                    </CardContent>
                </Card>

                <Card className='bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700 border-0 text-white shadow-lg dark:shadow-amber-900/20'>
                    <CardContent className='p-6'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-amber-100 dark:text-amber-200 text-sm font-medium'>Test3</p>
                                <p className='text-2xl font-bold'>92%</p>
                                <p className='text-xs text-amber-200 dark:text-amber-300 mt-1'>Excellent match</p>
                            </div>
                            <CheckCircleIcon className='h-8 w-8 text-amber-200 dark:text-amber-300' />
                        </div>
                    </CardContent>
                </Card>

                <Card className='bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 border-0 text-white shadow-lg dark:shadow-purple-900/20'>
                    <CardContent className='p-6'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-purple-100 dark:text-purple-200 text-sm font-medium'>Test4</p>
                                <p className='text-2xl font-bold'>24</p>
                                <p className='text-xs text-purple-200 dark:text-purple-300 mt-1'>6 interviews</p>
                            </div>
                            <TrendingUp className='h-8 w-8 text-purple-200 dark:text-purple-300' />
                        </div>
                    </CardContent>
                </Card>
            </div>


        </div>
    );
}
