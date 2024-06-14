import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";

export default function Footer() {
  return (
    <div className="w-full pt-3 fixed bottom-0 bg-inherit h-15">
      <div className="text-slate-300 flex justify-center">
        <a
          href="https://linkedin.com/in/prateek-p-savanur-50b78b24a"
          target="_blank"
          rel="noreferrer"
          className="pr-4"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://twitter.com/prateek_savanur"
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <XIcon />
        </a>
        <a
          href="https://github.com/PrateekSavanur"
          target="_blank"
          rel="noreferrer"
          className="pl-4"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://prateeksavanur.medium.com/"
          target="_blank"
          rel="noreferrer"
          className="pl-4"
        >
          <DescriptionIcon />
        </a>
      </div>
      <p className="text-slate-300 text-center pb-3"> &copy; Prateek Savanur</p>
    </div>
  );
}
