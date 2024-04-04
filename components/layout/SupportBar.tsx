import useUsers from "@/hooks/useUsers";
import { useCallback } from "react";
import Avatar from "../Avatar";
import { use } from "react";
import { useRouter } from "next/router";
import Button from "../Button";

const SupportBar = () => {
  const router = useRouter();

  const { data: users = [] } = useUsers();

  if (users.length === 0) {
    return null;
  }

  const onClick = (userId: string) => {
    const url = `/users/${userId}`;

    router.push(url);
  };

  return (
    <div className="px-6 py hidden lg:block ">
      <div className="bg-neutral-900 rounded-xl p-4 border border-neutral-800">
        <h2 className="text-white text-sm font-semibold">          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="white"
          >
            <path d="M11.4227 8.9729C11.1304 8.67162 10.4085 8.77019 10.2775 9.16902C9.83005 10.5311 9.12512 11.4096 8.33213 11.4096C6.97999 11.4096 5.88387 8.85548 5.88387 5.7048C5.88387 2.55412 6.97999 -3.96872e-06 8.33213 -3.96872e-06C9.15611 -3.96872e-06 9.88502 0.948494 10.3287 2.40248C10.4512 2.80393 11.1715 2.91421 11.4704 2.6195C11.9257 2.17043 12.4813 1.90667 13.0808 1.90667C14.6261 1.90667 15.8788 3.65883 15.8788 5.82023C15.8788 7.98162 14.6261 9.73378 13.0808 9.73378C12.4602 9.73378 11.8867 9.45115 11.4227 8.9729ZM3.20537 5.90483C3.20537 7.67239 2.48782 9.10527 1.60268 9.10527C0.717546 9.10527 0 7.67239 0 5.90483C0 4.13727 0.717546 2.70438 1.60268 2.70438C2.48782 2.70438 3.20537 4.13727 3.20537 5.90483ZM20.6183 10.5763C21.7773 10.5763 22.7168 8.4559 22.7168 5.84023C22.7168 3.22456 21.7773 1.10414 20.6183 1.10414C19.4593 1.10414 18.5198 3.22456 18.5198 5.84023C18.5198 8.4559 19.4593 10.5763 20.6183 10.5763Z"></path>
          </svg>Proxima Perks</h2>
        <h3 className="text-white text-lg font-regular">Support a small team working towards a better web.</h3>
        <h5 className="text-white text-sm  font-light">We’re Proxima − not big tech. Makers of Y Social and ProximaOS. If you want, you can donate, and get special perks in return − no pressure.</h5>
        <Button secondary label="It's a deal." />
        <div className="flex flex-col gap-6 mt-4 "></div>
      </div>
    </div>
  );
};

export default SupportBar;


<svg width="23" height="12" viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4227 8.9729C11.1304 8.67162 10.4085 8.77019 10.2775 9.16902C9.83005 10.5311 9.12512 11.4096 8.33213 11.4096C6.97999 11.4096 5.88387 8.85548 5.88387 5.7048C5.88387 2.55412 6.97999 -3.96872e-06 8.33213 -3.96872e-06C9.15611 -3.96872e-06 9.88502 0.948494 10.3287 2.40248C10.4512 2.80393 11.1715 2.91421 11.4704 2.6195C11.9257 2.17043 12.4813 1.90667 13.0808 1.90667C14.6261 1.90667 15.8788 3.65883 15.8788 5.82023C15.8788 7.98162 14.6261 9.73378 13.0808 9.73378C12.4602 9.73378 11.8867 9.45115 11.4227 8.9729ZM3.20537 5.90483C3.20537 7.67239 2.48782 9.10527 1.60268 9.10527C0.717546 9.10527 0 7.67239 0 5.90483C0 4.13727 0.717546 2.70438 1.60268 2.70438C2.48782 2.70438 3.20537 4.13727 3.20537 5.90483ZM20.6183 10.5763C21.7773 10.5763 22.7168 8.4559 22.7168 5.84023C22.7168 3.22456 21.7773 1.10414 20.6183 1.10414C19.4593 1.10414 18.5198 3.22456 18.5198 5.84023C18.5198 8.4559 19.4593 10.5763 20.6183 10.5763Z" fill="white"/>
</svg>
