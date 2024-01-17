import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <div className="w-full pt-6 fixed bottom-0 bg-inherit">
      <div className="text-slate-300 flex justify-center pb-6">
        <a
          href="https://linkedin.com/in/prateek-p-savanur-50b78b24a"
          target="_blank"
          rel="noreferrer"
          className="px-4"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://twitter.com/prateek_savanur"
          target="_blank"
          rel="noreferrer"
          className="px-4"
        >
          <XIcon />
        </a>
        <a
          href="https://github.com/PrateekSavanur"
          target="_blank"
          rel="noreferrer"
          className="px-4"
        >
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
}
