
import { motion } from 'framer-motion'
import { useState } from 'react'

interface EnvelopeProps {
  onOpen: () => void
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [opened, setOpened] = useState(false)

  const handleOpen = () => {
    if (opened) return

    setOpened(true)
    onOpen()
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#321b16] px-5">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full border border-[#d6b36a]" />
        <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full border border-[#d6b36a]" />
      </div>

      <div className="relative z-10 w-full max-w-md text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.5em] text-[#d6b36a]">
          Together with their families
        </p>

        <h1 className="mb-3 text-3xl text-[#f8edda]">
          A Wedding Invitation
        </h1>

        <p className="mb-12 text-sm tracking-[0.25em] text-[#d6b36a]">
          UKWA EMETU IRO & ONYINYECHI CHIDI DIKE
        </p>

        <motion.button
          type="button"
          onClick={handleOpen}
          disabled={opened}
          aria-label="Open wedding invitation"
          className="relative mx-auto block w-full max-w-[320px] border-0 bg-transparent p-0"
          whileHover={!opened ? { scale: 1.04 } : {}}
          whileTap={!opened ? { scale: 0.97 } : {}}
        >
          <div className="relative h-52 w-full">
            <div className="absolute inset-0 overflow-hidden rounded-md border border-[#d6b36a] bg-[#633a2c] shadow-2xl">
              <div className="absolute inset-x-0 bottom-0 h-0 border-l-[160px] border-r-[160px] border-t-[110px] border-l-transparent border-r-transparent border-t-[#774936]" />

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="mt-8 text-3xl text-[#e5c47f]">
                  U & O
                </span>
              </div>
            </div>

            <motion.div
              className="absolute inset-x-0 top-0 z-20 h-0 border-l-[160px] border-r-[160px] border-t-[110px] border-l-transparent border-r-transparent border-t-[#9a6445]"
              style={{ transformOrigin: 'top center' }}
              animate={
                opened
                  ? { rotateX: 180, opacity: 0 }
                  : { rotateX: 0, opacity: 1 }
              }
              transition={{ duration: 0.9, ease: 'easeInOut' }}
            />

            <motion.div
              className="absolute left-1/2 top-[92px] z-30 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#e5c47f] bg-[#8b3027] text-xl text-[#f8edda] shadow-lg"
              animate={opened ? { scale: 0, opacity: 0 } : { scale: 1 }}
              transition={{ duration: 0.35 }}
            >
              U
            </motion.div>
          </div>
        </motion.button>

        <motion.p
          className="mt-10 text-sm tracking-[0.25em] text-[#f8edda]"
          animate={{ opacity: opened ? 0 : [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: opened ? 0 : Infinity }}
        >
          {opened ? 'OPENING YOUR INVITATION...' : 'TAP THE ENVELOPE TO OPEN'}
        </motion.p>

        <p className="mt-6 text-xs italic text-[#d6b36a]">
          A beautiful beginning, a lifetime of love.
        </p>
      </div>
    </div>
  )
}
