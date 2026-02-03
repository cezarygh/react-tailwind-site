import { useState } from "react"
import { ChevronRight } from "lucide-react"

interface ContactItem {
  title: string
  content: string
}

const contactData: ContactItem[] = [
  { title: "Email", content: "cezarygm@gmail.com" },
  { title: "Phone", content: "Kontakt mig via e-mail." },
  { title: "Address", content: "København SV" },
]

const ContactAccordion = () => {
  // Holder styr på hvilket accordion-item der er åbent
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null)

  // Åbner eller lukker et item når man klikker på det
  const handleToggleItem = (clickedIndex: number) => {
    if (openItemIndex === clickedIndex) {
      setOpenItemIndex(null) // Luk hvis det allerede er åbent
    } else {
      setOpenItemIndex(clickedIndex) // Åbn det klikkede item
    }
  }

  return (
    <div className="max-w-md mx-auto mt-12 rounded-xl border border-slate-300 bg-slate-50 overflow-hidden">
      <ul className="divide-y divide-slate-200">
        {contactData.map((item, index) => {
          // Tjekker om dette item er åbent
          const isItemOpen = openItemIndex === index

          return (
            <li key={item.title}>
              <button
                onClick={() => handleToggleItem(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left
                           text-slate-700 font-medium hover:bg-slate-100 transition-colors"
              >
                <span>{item.title}</span>
                <ChevronRight
                  className={`h-5 w-5 text-slate-400 transition-transform duration-200
                              ${isItemOpen ? "rotate-90" : ""}`}
                />
              </button>

              {isItemOpen && (
                <div className="px-6 pb-4 text-slate-600 leading-relaxed">
                  {item.content}
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ContactAccordion