import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChefHat, Shuffle, Sparkles, MoveRight } from 'lucide-react'

const Page = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-amber-50/50 via-slate-50 to-orange-50/30 flex flex-col items-center justify-center p-6">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 -left-20 -z-10 h-72 w-72 rounded-full bg-orange-200 blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 -z-10 h-80 w-80 rounded-full bg-yellow-200 blur-3xl opacity-25 animate-pulse delay-1000" />

      {/* Hero Section */}
      <div className="max-w-2xl w-full text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-1.5 bg-orange-100/80 px-4 py-1.5 rounded-full text-orange-700 font-medium text-sm mb-2 backdrop-blur-sm border border-orange-200/50">
          <Sparkles className="w-4 h-4 animate-spin-slow" /> 
          <span>Đau đầu vì chọn món? </span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-none">
          Hôm nay <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500">Ăn Gì</span> Nhỉ? 🍜
        </h1>
        
        <p className="text-slate-500 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
          Đừng suy nghĩ nữa! Hãy để vòng quay số phận chọn giúp bạn một món ăn ngon tối nay.
        </p>
      </div>

      {/* Options Grid */}
      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl w-full">
        
        {/* Card 1: Random món ăn có sẵn */}
        <Link href="/random" className="group flex">
          <div className="flex-1 flex flex-col bg-white/80 border border-slate-100 rounded-3xl p-8 shadow-xl shadow-orange-500/[0.03] backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/[0.07] hover:-translate-y-1.5 hover:border-orange-100 cursor-pointer">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-white mb-6 shadow-md shadow-orange-300/30 group-hover:scale-110 transition-transform duration-300">
              <ChefHat className="w-7 h-7" />
            </div>
            
            <h2 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">
              Gợi Ý Sẵn Có
            </h2>
            
            <p className="text-slate-500 text-sm mb-8 flex-1">
              Khám phá thực đơn đa dạng được tuyển chọn sẵn. Xoay ngay để có ý tưởng!
            </p>

            <div className="flex items-center gap-2 text-sm font-semibold text-orange-600 group-hover:gap-3 transition-all">
              <span>Bắt đầu xoay</span>
              <MoveRight className="w-4 h-4" />
            </div>
          </div>
        </Link>

        {/* Card 2: Random món ăn tự nhập */}
        <Link href="/custom" className="group flex">
          <div className="flex-1 flex flex-col bg-white/80 border border-slate-100 rounded-3xl p-8 shadow-xl shadow-amber-500/[0.03] backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/[0.07] hover:-translate-y-1.5 hover:border-amber-100 cursor-pointer">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-400 flex items-center justify-center text-white mb-6 shadow-md shadow-amber-300/30 group-hover:scale-110 transition-transform duration-300">
              <Shuffle className="w-7 h-7" />
            </div>
            
            <h2 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
              Tự Thêm Thực Đơn
            </h2>
            
            <p className="text-slate-500 text-sm mb-8 flex-1">
              Bạn đang phân vân giữa vài món cụ thể? Tự tay nhập danh sách và xoay nào!
            </p>

            <div className="flex items-center gap-2 text-sm font-semibold text-amber-600 group-hover:gap-3 transition-all">
              <span>Tạo danh sách</span>
              <MoveRight className="w-4 h-4" />
            </div>
          </div>
        </Link>

      </div>

      {/* Footer decorative text */}
      <div className="absolute bottom-6 text-xs text-slate-400">
        Made with ❤️ for hungry people
      </div>

    </div>
  )
}

export default Page