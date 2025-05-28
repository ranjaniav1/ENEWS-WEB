import React, { useState } from "react";
import Icons from "@/app/components/shared/Icons";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import PrintIcon from "@mui/icons-material/Print";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";  // <-- import speaker icon
import CommentsDrawer from "./CommentDrawer";
import toast from "react-hot-toast";

import { useThemeContext } from "@/app/context/ThemeContext";
import { useAuth } from "@/app/context/AuthContext";

const NewsIcons = ({ article, title }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isReading, setIsReading] = useState(false);

  const { user } = useAuth();
  const { themeData } = useThemeContext();

  // Helper to get plain text from HTML string
  const getPlainText = (html) => {
    if (!html) return "";
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  const handleReadAloud = () => {
    const synth = window.speechSynthesis;
    if (!synth) {
      toast.error("Speech synthesis not supported in your browser.");
      return;
    }

    if (synth.speaking) {
      synth.cancel();
      setIsReading(false);
      return;
    }

    const text = getPlainText(article.content || article.excerpt || "");
    if (text.trim() === "") {
      toast.error("No content available to read.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US"; // customize if you want
    utterance.onend = () => setIsReading(false);
    utterance.onerror = () => {
      toast.error("Failed to read aloud.");
      setIsReading(false);
    };

    synth.speak(utterance);
    setIsReading(true);
  };

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/news/${article.slug}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: shareUrl,
        });

        // ✅ After successful native share, call the API
        await httpAxios.put(`/api/articles/${article._id}/share`);
      } else {
        setModalOpen(true);
      }
    } catch (err) {
      console.error("Share failed:", err);
      toast.error("Failed to share article");
    }
  };

  return (
    <div className="flex justify-between items-center my-4">
      <div className="flex space-x-2">
        <Icons icon={<ShareIcon />} onClick={handleShare} />
        <Icons
          icon={<CommentIcon />}
          onClick={() => {
            if (user) {
              setDrawerOpen(true);
            } else {
              toast.error("Please log in!");
            }
          }}
        />

      </div>
      <div className="flex space-x-2">
        <Icons icon={<VolumeUpIcon />} onClick={handleReadAloud} />
        <Icons icon={<PrintIcon />} onClick={() => window.print()} />
      </div>
      <CommentsDrawer open={drawerOpen} setOpen={setDrawerOpen} article={article} />
    </div>
  );
};

export default NewsIcons;
