import type { FC } from 'react';

interface PS5TrophyProps {
  visible: boolean;
}

const PS5Trophy: FC<PS5TrophyProps> = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="animate-trophy-slide w-full max-w-[420px]">
      <div
        className="relative overflow-hidden rounded-2xl p-7"
        style={{
          background:
            'linear-gradient(135deg, rgba(30,30,40,0.95), rgba(20,20,30,0.98))',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow:
            '0 25px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        {/* PS accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{
            background: 'linear-gradient(90deg, #0070d1, #00a2ff, #0070d1)',
          }}
        />

        <div className="flex items-center gap-5">
          {/* Trophy icon */}
          <div
            className="flex-shrink-0 flex items-center justify-center w-[72px] h-[72px] rounded-xl text-4xl"
            style={{
              background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
              border: '1px solid rgba(255,255,255,0.06)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            🏆
          </div>

          <div className="flex-1 min-w-0">
            {/* Trophy rarity */}
            <div className="text-[11px] font-semibold uppercase tracking-[1.5px] text-gray-400 mb-1 font-body">
              🎮 Золотой трофей
            </div>

            {/* Title */}
            <div className="text-lg font-bold text-white mb-1.5 font-display leading-tight">
              Вы стали девиантом
            </div>

            {/* Description */}
            <div className="text-[13px] text-white/50 leading-relaxed font-body">
              Вы сделали неправильный выбор
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between">
          <div className="text-xs text-white/30 font-body">✕ △ ○ □</div>
          <div className="text-[11px] text-white/25 font-body tracking-wide">
            Valentine's Day 2026
          </div>
        </div>
      </div>
    </div>
  );
};

export default PS5Trophy;
