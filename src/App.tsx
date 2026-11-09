
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Music2, ChevronLeft, ChevronRight } from 'lucide-react'
import Envelope from './components/Envelope'

const photos = [
  '/images/uk4.jpeg',
  '/images/ukwa2.jpeg',
  '/images/uk1.jpeg',
  '/images/uk3.jpeg',
  '/images/uk5.jpeg',
]

const pageDuration = [18000, 9000, 9000, 11000, 10000, 0]

function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="absolute inset-0 flex h-full w-full flex-col items-center justify-center overflow-hidden px-6 py-8 text-center"
    >
      {children}
    </motion.section>
  )
}

function WeddingPages() {
  const [page, setPage] = useState(0)
  const [photo, setPhoto] = useState(0)

  useEffect(() => {
    const photoTimer = window.setInterval(() => {
      setPhoto((previous) => (previous + 1) % photos.length)
    }, 3000)

    return () => window.clearInterval(photoTimer)
  }, [])

  useEffect(() => {
    const duration = pageDuration[page]
    if (!duration) return

    const timer = window.setTimeout(() => {
      setPage((previous) => Math.min(previous + 1, 5))
    }, duration)

    return () => window.clearTimeout(timer)
  }, [page])

  const nextPage = () => setPage((previous) => Math.min(previous + 1, 5))
  const previousPage = () => setPage((previous) => Math.max(previous - 1, 0))

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#321b16] text-[#f8edda]">
      <AnimatePresence mode="wait">
        {page === 0 && (
          <PageFrame key="photos">
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#d6b36a]">
              A beautiful love story
            </p>

            {/* Full photographs with no frame or background panel */}
            <div className="relative h-[65vh] max-h-[650px] w-full max-w-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={photos[photo]}
                  src={photos[photo]}
                  alt="Ukwa and Onyinyechi"
                  initial={{ x: '100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: '-100%', opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </AnimatePresence>
            </div>

            <h1 className="mt-5 font-serif text-2xl md:text-4xl">
              Ukwa Emetu Iro
              <span className="mx-3 italic text-[#d6b36a]">&</span>
              Onyinyechi Chidi Dike
            </h1>

            <p className="mt-3 text-xs uppercase tracking-[0.4em] text-[#d6b36a]">
              Two hearts, one beautiful journey
            </p>
          </PageFrame>
        )}

        {page === 1 && (
          <PageFrame key="save-date">
            <p className="text-xs uppercase tracking-[0.5em] text-[#d6b36a]">
              Kindly Save the Date
            </p>
            <p className="my-10 font-serif text-5xl italic text-[#e5c47f] md:text-7xl">
              U & O
            </p>
            <h1 className="font-serif text-3xl md:text-5xl">
              Ukwa Emetu Iro
            </h1>
            <p className="my-3 text-3xl italic text-[#d6b36a]">&</p>
            <h1 className="font-serif text-3xl md:text-5xl">
              Onyinyechi Chidi Dike
            </h1>
            <div className="my-9 h-px w-32 bg-[#d6b36a]" />
            <p className="text-3xl tracking-widest text-[#e5c47f]">
              06 · 01 · 2027
            </p>
            <p className="mt-4 text-sm tracking-[0.3em] text-[#d6b36a]">
              WEDNESDAY · 10:00 A.M.
            </p>
          </PageFrame>
        )}

        {page === 2 && (
          <PageFrame key="invitation">
            <p className="mb-7 text-xs uppercase tracking-[0.4em] text-[#d6b36a]">
              With joyful hearts
            </p>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              You Are Cordially Invited
            </h2>
            <div className="my-9 h-px w-24 bg-[#d6b36a]" />
            <p className="max-w-xl text-base leading-8 md:text-xl">
              Together with their families, Ukwa Emetu Iro and
              Onyinyechi Chidi Dike joyfully invite you to witness
              and celebrate their union in love, faith and togetherness.
            </p>
            <p className="mt-10 font-serif text-2xl italic text-[#e5c47f]">
              A beautiful beginning, a lifetime of love.
            </p>
          </PageFrame>
        )}

        {page === 3 && (
          <PageFrame key="details">
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#d6b36a]">
              The Celebration
            </p>
            <h2 className="mb-10 font-serif text-4xl md:text-5xl">
              Wedding Details
            </h2>
            <div className="w-full max-w-lg space-y-7">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#d6b36a]">
                  The Date & Time
                </p>
                <p className="font-serif text-2xl">
                  Wednesday, 6 January 2027
                </p>
                <p className="mt-2 text-lg">10:00 A.M.</p>
              </div>
              <div className="mx-auto h-px w-20 bg-[#d6b36a]/60" />
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#d6b36a]">
                  Church Ceremony
                </p>
                <p className="font-serif text-2xl">Royal Praise Center</p>
                <p className="mt-2">Ebem Ohafia, Abia State</p>
              </div>
              <div className="mx-auto h-px w-20 bg-[#d6b36a]/60" />
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#d6b36a]">
                  Reception
                </p>
                <p className="font-serif text-2xl">Amaekpu Community School</p>
                <p className="mt-2">Ohafia, Abia State</p>
              </div>
            </div>
          </PageFrame>
        )}

        {page === 4 && (
          <PageFrame key="families">
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#d6b36a]">
              With the blessings of our families
            </p>
            <h2 className="mb-12 font-serif text-4xl">Our Families</h2>
            <div className="w-full max-w-lg space-y-12">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#d6b36a]">
                  Groom's Family
                </p>
                <h3 className="font-serif text-2xl">
                  Late Chief & Mrs Emetu Iro
                </h3>
                <p className="mt-3">Of Ndi Odike Compound</p>
                <p>Amaekpu Ohafia</p>
              </div>
              <div className="mx-auto h-px w-20 bg-[#d6b36a]/60" />
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#d6b36a]">
                  Bride's Family
                </p>
                <h3 className="font-serif text-2xl">
                  Mr & Mrs Chidi Dike Arunsi
                </h3>
                <p className="mt-3">Of Ndi Obele Compound</p>
                <p>Abia Ohafia</p>
              </div>
            </div>
          </PageFrame>
        )}

        {page === 5 && (
          <PageFrame key="closing">
            <p className="mb-8 text-5xl text-[#d6b36a]">♡</p>
            <p className="mb-7 text-xs uppercase tracking-[0.4em] text-[#d6b36a]">
              A beautiful beginning
            </p>
            <h2 className="font-serif text-4xl leading-relaxed text-[#e5c47f] md:text-6xl">
              We Can't Wait
              <br />
              To See You!
            </h2>
            <p className="mt-9 max-w-md text-base leading-8">
              Your presence and prayers will make our special day
              even more memorable. We look forward to celebrating
              this beautiful beginning with you.
            </p>
            <p className="mt-10 font-serif text-3xl italic text-[#d6b36a]">
              Ukwa & Onyinyechi
            </p>
            <p className="mt-8 text-xs uppercase tracking-[0.4em] text-[#d6b36a]">
              Forever Begins Here · 2027
            </p>
          </PageFrame>
        )}
      </AnimatePresence>

      <div className="absolute bottom-5 left-0 right-0 z-40 flex items-center justify-between px-5">
        <button
          onClick={previousPage}
          disabled={page === 0}
          className="flex items-center gap-1 rounded-full border border-[#d6b36a]/50 px-4 py-2 text-sm text-[#e5c47f] disabled:opacity-20"
        >
          <ChevronLeft size={17} />
          Back
        </button>
        <p className="text-xs tracking-widest text-[#d6b36a]">
          {page + 1} / 6
        </p>
        <button
          onClick={nextPage}
          disabled={page === 5}
          className="flex items-center gap-1 rounded-full border border-[#d6b36a]/50 px-4 py-2 text-sm text-[#e5c47f] disabled:opacity-20"
        >
          Next
          <ChevronRight size={17} />
        </button>
      </div>
    </div>
  )
}

function App() {
  const [invitationOpened, setInvitationOpened] = useState(false)
  const [musicPlaying, setMusicPlaying] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleOpenInvitation = () => {
    const audio = new Audio('/music/wedding-song.mp3')
    audio.loop = true
    audio.volume = 0.7
    audioRef.current = audio

    audio.play()
      .then(() => setMusicPlaying(true))
      .catch(() => setMusicPlaying(false))

    setTimeout(() => setInvitationOpened(true), 1400)
  }

  const toggleMusic = async () => {
    if (!audioRef.current) return

    if (audioRef.current.paused) {
      try {
        await audioRef.current.play()
        setMusicPlaying(true)
      } catch {
        setMusicPlaying(false)
      }
    } else {
      audioRef.current.pause()
      setMusicPlaying(false)
    }
  }

  return (
    <main className="h-screen overflow-hidden bg-[#321b16]">
      {!invitationOpened ? (
        <Envelope onOpen={handleOpenInvitation} />
      ) : (
        <>
          <WeddingPages />
          <button
            onClick={toggleMusic}
            aria-label={musicPlaying ? 'Pause music' : 'Play music'}
            className="fixed right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[#d6b36a] bg-[#321b16] text-[#d6b36a] shadow-xl"
          >
            <Music2 size={20} />
          </button>
        </>
      )}
    </main>
  )
}

export default App
