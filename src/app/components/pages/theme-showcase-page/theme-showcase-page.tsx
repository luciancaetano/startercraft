import styles from './theme-showcase-page.module.scss';
import { ThemeShowcasePageProps } from './theme-showcase-page.types';
import Page from '@components/elements/page';
import clsx from 'clsx';
import React, { PropsWithChildren, useState } from 'react';

function ShowCase({
  title,
  children,
  className,
}: PropsWithChildren<{ title: string; className?: string }>) {
  return (
    <div className="">
      <div className="divider">{title}</div>
      <div className={clsx('py-4 space-x-1 space-y-1', className)}>{children}</div>
    </div>
  );
}

function ThemeShowcasePage(props: ThemeShowcasePageProps) {
  const { className, testingID, style } = props;
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Page
      className={clsx('theme-showcase-page', styles.themeShowcasePage, className)}
      testingID={testingID}
      style={style}
    >
      {/* Hero Section */}
      <div className="hero bg-base-200 py-10">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to the Theme Showcase</h1>
            <p className="py-6">Explore various components styled with DaisyUI and Tailwind CSS.</p>
            <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">About This Showcase</h3>
            <p className="py-4">
              This page demonstrates the power of DaisyUI components and their customization
              capabilities.
            </p>
            <div className="modal-action">
              <button className="btn btn-primary" onClick={() => setModalOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <ShowCase title="Buttons">
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-info">Info</button>
        <button className="btn btn-success">Success</button>
        <button className="btn btn-warning">Warning</button>
        <button className="btn btn-error">Error</button>
        <br />
        <button className="btn btn-soft">Default</button>
        <button className="btn btn-soft btn-primary">Primary</button>
        <button className="btn btn-soft btn-secondary">Secondary</button>
        <button className="btn btn-soft btn-accent">Accent</button>
        <button className="btn btn-soft btn-info">Info</button>
        <button className="btn btn-soft btn-success">Success</button>
        <button className="btn btn-soft btn-warning">Warning</button>
        <button className="btn btn-soft btn-error">Error</button>
        <br />
        <button className="btn btn-outline">Default</button>
        <button className="btn btn-outline btn-primary">Primary</button>
        <button className="btn btn-outline btn-secondary">Secondary</button>
        <button className="btn btn-outline btn-accent">Accent</button>
        <button className="btn btn-outline btn-info">Info</button>
        <button className="btn btn-outline btn-success">Success</button>
        <button className="btn btn-outline btn-warning">Warning</button>
        <button className="btn btn-outline btn-error">Error</button>
        <br />
        <button className="btn btn-dash">Default</button>
        <button className="btn btn-dash btn-primary">Primary</button>
        <button className="btn btn-dash btn-secondary">Secondary</button>
        <button className="btn btn-dash btn-accent">Accent</button>
        <button className="btn btn-dash btn-info">Info</button>
        <button className="btn btn-dash btn-success">Success</button>
        <button className="btn btn-dash btn-warning">Warning</button>
        <button className="btn btn-dash btn-error">Error</button>
        <br />
        <button className="btn btn-active">Default</button>
        <button className="btn btn-active btn-primary">Primary</button>
        <button className="btn btn-active btn-secondary">Secondary</button>
        <button className="btn btn-active btn-accent">Accent</button>
        <button className="btn btn-active btn-info">Info</button>
        <button className="btn btn-active btn-success">Success</button>
        <button className="btn btn-active btn-warning">Warning</button>
        <button className="btn btn-active btn-error">Error</button>
        <br />
        <button className="btn btn-ghost">Ghost</button>
        <button className="btn btn-link">Link</button>
      </ShowCase>

      <ShowCase title="Tooltips">
        <div className="tooltip tooltip-primary" data-tip="Primary Tooltip">
          <button className="btn">Hover me</button>
        </div>
        <div className="tooltip tooltip-secondary" data-tip="Secondary Tooltip">
          <button className="btn">Hover me</button>
        </div>
      </ShowCase>

      <ShowCase title="Progress Bars">
        <progress className="progress progress-primary w-56" value="40" max="100"></progress>
        <progress className="progress progress-secondary w-56" value="60" max="100"></progress>
        <progress className="progress progress-accent w-56" value="80" max="100"></progress>
      </ShowCase>

      <ShowCase title="Card" className="flex">
        <div className="card w-96 bg-base-100 shadow-sm">
          <div className="card-body">
            <span className="badge badge-xs badge-warning">Most Popular</span>
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold">Premium</h2>
              <span className="text-xl">$29/mo</span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>High-resolution image generation</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Customizable style templates</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Batch processing capabilities</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>AI-driven image enhancements</span>
              </li>
              <li className="opacity-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-base-content/50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="line-through">Seamless cloud integration</span>
              </li>
              <li className="opacity-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-base-content/50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="line-through">Real-time collaboration tools</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn btn-primary btn-block">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="card card-border bg-base-100 w-96">
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there are title and
              actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </ShowCase>
      <ShowCase title="List">
        <ul className="list bg-base-100 rounded-box shadow-md">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li>

          <li className="list-row">
            <div>
              <img
                alt="list-image"
                className="size-10 rounded-box"
                src="https://img.daisyui.com/images/profile/demo/1@94.webp"
              />
            </div>
            <div>
              <div>Dio Lupa</div>
              <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
            </div>
            <p className="list-col-wrap text-xs">
              &quot;Remaining Reason&quot; became an instant hit, praised for its haunting sound and
              emotional depth. A viral performance brought it widespread recognition, making it one
              of Dio Lupa’s most iconic tracks.
            </p>
            <button className="btn btn-square btn-ghost">
              <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 3L20 12 6 21 6 3z"></path>
                </g>
              </svg>
            </button>
            <button className="btn btn-square btn-ghost">
              <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </g>
              </svg>
            </button>
          </li>

          <li className="list-row">
            <div>
              <img
                alt="list-image"
                className="size-10 rounded-box"
                src="https://img.daisyui.com/images/profile/demo/4@94.webp"
              />
            </div>
            <div>
              <div>Ellie Beilish</div>
              <div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
            </div>
            <p className="list-col-wrap text-xs">
              &quot;Bears of a Fever&quot; captivated audiences with its intense energy and
              mysterious lyrics. Its popularity skyrocketed after fans shared it widely online,
              earning Ellie critical acclaim.
            </p>
            <button className="btn btn-square btn-ghost">
              <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 3L20 12 6 21 6 3z"></path>
                </g>
              </svg>
            </button>
            <button className="btn btn-square btn-ghost">
              <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </g>
              </svg>
            </button>
          </li>

          <li className="list-row">
            <div>
              <img
                alt="list-image"
                className="size-10 rounded-box"
                src="https://img.daisyui.com/images/profile/demo/3@94.webp"
              />
            </div>
            <div>
              <div>Sabrino Gardener</div>
              <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
            </div>
            <p className="list-col-wrap text-xs">
              Cappuccino quickly gained attention for its smooth melody and relatable themes. The
              song’s success propelled Sabrino into the spotlight, solidifying their status as a
              rising star.
            </p>
            <button className="btn btn-square btn-ghost">
              <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 3L20 12 6 21 6 3z"></path>
                </g>
              </svg>
            </button>
            <button className="btn btn-square btn-ghost">
              <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </g>
              </svg>
            </button>
          </li>
        </ul>
      </ShowCase>

      <ShowCase title="Table">
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ShowCase>
      <ShowCase title="Timeline">
        <ul className="timeline">
          <li>
            <div className="timeline-start timeline-box">First Macintosh computer</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-primary h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-primary h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">iMac</div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-start timeline-box">iPod</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-primary h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">iPhone</div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start timeline-box">Apple Watch</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </li>
        </ul>
      </ShowCase>

      <ShowCase title="Login buttons">
        <button className="btn bg-white text-black border-[#e5e5e5]">
          <svg
            aria-label="Email icon"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="black"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          Login with Email
        </button>
        <button className="btn bg-black text-white border-black">
          <svg
            aria-label="GitHub logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
            ></path>
          </svg>
          Login with GitHub
        </button>
        <button className="btn bg-white text-black border-[#e5e5e5]">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
              <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
              <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        <button className="btn bg-[#1A77F2] text-white border-[#005fd8]">
          <svg
            aria-label="Facebook logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              fill="white"
              d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
            ></path>
          </svg>
          Login with Facebook
        </button>
        <button className="btn bg-black text-white border-black">
          <svg
            aria-label="X logo"
            width="16"
            height="12"
            viewBox="0 0 300 271"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
            />
          </svg>
          Login with X
        </button>
        <button className="btn bg-[#FEE502] text-[#181600] border-[#f1d800]">
          <svg
            aria-label="Kakao logo"
            width="16"
            height="16"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#181600"
              d="M255.5 48C299.345 48 339.897 56.5332 377.156 73.5996C414.415 90.666 443.871 113.873 465.522 143.22C487.174 172.566 498 204.577 498 239.252C498 273.926 487.174 305.982 465.522 335.42C443.871 364.857 414.46 388.109 377.291 405.175C340.122 422.241 299.525 430.775 255.5 430.775C241.607 430.775 227.262 429.781 212.467 427.795C148.233 472.402 114.042 494.977 109.892 495.518C107.907 496.241 106.012 496.15 104.208 495.248C103.486 494.706 102.945 493.983 102.584 493.08C102.223 492.177 102.043 491.365 102.043 490.642V489.559C103.126 482.515 111.335 453.169 126.672 401.518C91.8486 384.181 64.1974 361.2 43.7185 332.575C23.2395 303.951 13 272.843 13 239.252C13 204.577 23.8259 172.566 45.4777 143.22C67.1295 113.873 96.5849 90.666 133.844 73.5996C171.103 56.5332 211.655 48 255.5 48Z"
            ></path>
          </svg>
          카카오 로그인
        </button>
        <button className="btn bg-black text-white border-black">
          <svg
            aria-label="Apple logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1195 1195"
          >
            <path
              fill="white"
              d="M1006.933 812.8c-32 153.6-115.2 211.2-147.2 249.6-32 25.6-121.6 25.6-153.6 6.4-38.4-25.6-134.4-25.6-166.4 0-44.8 32-115.2 19.2-128 12.8-256-179.2-352-716.8 12.8-774.4 64-12.8 134.4 32 134.4 32 51.2 25.6 70.4 12.8 115.2-6.4 96-44.8 243.2-44.8 313.6 76.8-147.2 96-153.6 294.4 19.2 403.2zM802.133 64c12.8 70.4-64 224-204.8 230.4-12.8-38.4 32-217.6 204.8-230.4z"
            ></path>
          </svg>
          Login with Apple
        </button>
        <button className="btn bg-[#FF9900] text-black border-[#e17d00]">
          <svg
            aria-label="Amazon logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <g fill="black">
              <path d="M14.463 13.831c-1.753 1.294-4.291 1.981-6.478 1.981-3.066 0-5.825-1.131-7.912-3.019-.163-.147-.019-.35.178-.234 2.253 1.313 5.041 2.1 7.919 2.1 1.941 0 4.075-.403 6.041-1.238.294-.125.544.197.253.409z"></path>
              <path d="M15.191 13c-.225-.287-1.481-.137-2.047-.069-.172.019-.197-.128-.044-.238 1.003-.703 2.647-.5 2.838-.266.194.238-.05 1.884-.991 2.672-.144.122-.281.056-.219-.103.216-.528.688-1.709.463-1.997zM11.053 11.838l.003.003c.387-.341 1.084-.95 1.478-1.278.156-.125.128-.334.006-.509-.353-.488-.728-.884-.728-1.784v-3c0-1.272.088-2.438-.847-3.313-.738-.706-1.963-.956-2.9-.956-1.831 0-3.875.684-4.303 2.947-.047.241.131.369.287.403l1.866.203c.175-.009.3-.181.334-.356.159-.778.813-1.156 1.547-1.156.397 0 .847.144 1.081.5.269.397.234.938.234 1.397v.25c-1.116.125-2.575.206-3.619.666-1.206.522-2.053 1.584-2.053 3.147 0 2 1.259 3 2.881 3 1.369 0 2.116-.322 3.172-1.403.35.506.463.753 1.103 1.284a.395.395 0 0 0 .456-.044zm-1.94-4.694c0 .75.019 1.375-.359 2.041-.306.544-.791.875-1.331.875-.737 0-1.169-.563-1.169-1.394 0-1.641 1.472-1.938 2.863-1.938v.416z"></path>
            </g>
          </svg>
          Login with Amazon
        </button>
        <button className="btn bg-[#2F2F2F] text-white border-black">
          <svg
            aria-label="Microsoft logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M96 96H247V247H96" fill="#f24f23"></path>
            <path d="M265 96V247H416V96" fill="#7eba03"></path>
            <path d="M96 265H247V416H96" fill="#3ca4ef"></path>
            <path d="M265 265H416V416H265" fill="#f9ba00"></path>
          </svg>
          Login with Microsoft
        </button>
        <button className="btn bg-[#03C755] text-white border-[#00b544]">
          <svg
            aria-label="Line logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <g fillRule="evenodd" strokeLinejoin="round" fill="white">
              <path
                fillRule="nonzero"
                d="M12.91 6.57c.232 0 .42.19.42.42 0 .23-.188.42-.42.42h-1.17v.75h1.17a.42.42 0 1 1 0 .84h-1.59a.42.42 0 0 1-.418-.42V5.4c0-.23.188-.42.42-.42h1.59a.42.42 0 0 1-.002.84h-1.17v.75h1.17zm-2.57 2.01a.421.421 0 0 1-.757.251l-1.63-2.217V8.58a.42.42 0 0 1-.42.42.42.42 0 0 1-.418-.42V5.4a.418.418 0 0 1 .755-.249L9.5 7.366V5.4c0-.23.188-.42.42-.42.23 0 .42.19.42.42v3.18zm-3.828 0c0 .23-.188.42-.42.42a.42.42 0 0 1-.418-.42V5.4c0-.23.188-.42.42-.42.23 0 .418.19.418.42v3.18zM4.868 9h-1.59c-.23 0-.42-.19-.42-.42V5.4c0-.23.19-.42.42-.42.232 0 .42.19.42.42v2.76h1.17a.42.42 0 1 1 0 .84M16 6.87C16 3.29 12.41.376 8 .376S0 3.29 0 6.87c0 3.208 2.846 5.896 6.69 6.405.26.056.615.172.705.394.08.2.053.518.026.722 0 0-.092.565-.113.685-.035.203-.16.79.693.432.854-.36 4.607-2.714 6.285-4.646C15.445 9.594 16 8.302 16 6.87"
              ></path>
            </g>
          </svg>
          LINEでログイン
        </button>
        <button className="btn bg-[#622069] text-white border-[#591660]">
          <svg
            aria-label="Slack logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g strokeLinecap="round" strokeWidth="78">
              <path stroke="#36c5f0" d="m110 207h97m0-97h.1v-.1"></path>
              <path stroke="#2eb67d" d="m305 110v97m97 0v.1h.1"></path>
              <path stroke="#ecb22e" d="m402 305h-97m0 97h-.1v.1"></path>
              <path stroke="#e01e5a" d="M110 305h.1v.1m97 0v97"></path>
            </g>
          </svg>
          Login with Slack
        </button>
        <button className="btn bg-[#0967C2] text-white border-[#0059b3]">
          <svg
            aria-label="LinkedIn logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              fill="white"
              d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
              fillRule="evenodd"
            ></path>
          </svg>
          Login with LinkedIn
        </button>
        <button className="btn bg-[#47698F] text-white border-[#35567b]">
          <svg
            aria-label="VK logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2240 2240"
          >
            <g fill="white">
              <path d="M2077 904q23 64-150 294-24 32-65 85-78 100-90 131-17 41 14 81 17 21 81 82h1l1 1 1 1 2 2q141 131 191 221 3 5 6.5 12.5t7 26.5-.5 34-25 27.5-59 12.5l-256 4q-24 5-56-5t-52-22l-20-12q-30-21-70-64t-68.5-77.5-61-58-56.5-15.5q-3 1-8 3.5t-17 14.5-21.5 29.5-17 52-6.5 77.5q0 15-3.5 27.5t-7.5 18.5l-4 5q-18 19-53 22h-115q-71 4-146-16.5t-131.5-53-103-66T648 1722l-25-24q-10-10-27.5-30t-71.5-91-106-151-122.5-211T165 943q-6-16-6-27t3-16l4-6q15-19 57-19l274-2q12 2 23 6.5t16 8.5l5 3q16 11 24 32 20 50 46 103.5t41 81.5l16 29q29 60 56 104t48.5 68.5T814 1348t34 14 27-5q2-1 5-5t12-22 13.5-47 9.5-81 0-125q-2-40-9-73t-14-46l-6-12q-25-34-85-43-13-2 5-24 17-19 38-30 53-26 239-24 82 1 135 13 20 5 33.5 13.5t20.5 24 10.5 32 3.5 45.5-1 55-2.5 70.5-1.5 82.5q0 11-1 42t-.5 48 3.5 40.5 11.5 39 22.5 24.5q8 2 17 4t26-11 38-34.5 52-67 68-107.5q60-104 107-225 4-10 10-17.5t11-10.5l4-3 5-2.5 13-3 20-.5 288-2q39-5 64 2.5t31 16.5z"></path>
            </g>
          </svg>
          Login with VK
        </button>
        <button className="btn bg-[#5EBB2B] text-white border-[#4eaa0c]">
          <svg
            aria-label="WeChat logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <g fill="white">
              <path d="M11.606,3.068C5.031,3.068,0,7.529,0,12.393s4.344,7.681,4.344,7.681l-.706,2.676c-.093,.353,.284,.644,.602,.464l3.173-1.798c1.403,.447,4.381,.59,4.671,.603-.208-.721-.311-1.432-.311-2.095,0-3.754,3.268-9.04,10.532-9.04,.165,0,.331,.004,.496,.011-.965-4.627-5.769-7.827-11.195-7.827Zm-4.327,7.748c-.797,0-1.442-.646-1.442-1.442s.646-1.442,1.442-1.442,1.442,.646,1.442,1.442-.646,1.442-1.442,1.442Zm8.386,0c-.797,0-1.442-.646-1.442-1.442s.646-1.442,1.442-1.442,1.442,.646,1.442,1.442-.646,1.442-1.442,1.442Z"></path>
              <path d="M32,19.336c0-4.26-4.998-7.379-9.694-7.379-6.642,0-9.459,4.797-9.459,7.966s2.818,7.966,9.459,7.966c1.469,0,2.762-.211,3.886-.584l2.498,1.585c.197,.125.447-.052.394-.279l-.567-2.46c2.36-1.643,3.483-4.234,3.483-6.815Zm-12.73-.81c-.704,0-1.275-.571-1.275-1.275s.571-1.275,1.275-1.275,1.275,.571,1.275,1.275c0,.705-.571,1.275-1.275,1.275Zm6.373,0c-.704,0-1.275-.571-1.275-1.275s.571-1.275,1.275-1.275,1.275,.571,1.275,1.275-.571,1.275-1.275,1.275Z"></path>
            </g>
          </svg>
          Login with WeChat
        </button>
      </ShowCase>

      <ShowCase title="Dropdown">
        <details className="dropdown">
          <summary className="btn m-1">open or close</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <div>Item 1</div>
            </li>
            <li>
              <div>Item 2</div>
            </li>
          </ul>
        </details>
      </ShowCase>

      <ShowCase title="Accordion">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">How do I create an account?</div>
          <div className="collapse-content text-sm">
            Click the Sign Up button in the top right corner and follow the registration process.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-sm">
            Click on Forgot Password on the login page and follow the instructions sent to your
            email.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How do I update my profile information?
          </div>
          <div className="collapse-content text-sm">
            Go to My Account settings and select Edit Profile to make changes.
          </div>
        </div>
      </ShowCase>

      <ShowCase title="Badge">
        <div>
          <div className="badge badge-primary">Primary</div>
          <div className="badge badge-secondary">Secondary</div>
          <div className="badge badge-accent">Accent</div>
          <div className="badge badge-neutral">Neutral</div>
          <div className="badge badge-info">Info</div>
          <div className="badge badge-success">Success</div>
          <div className="badge badge-warning">Warning</div>
          <div className="badge badge-error">Error</div>
        </div>
      </ShowCase>
    </Page>
  );
}

export default React.memo(ThemeShowcasePage);
