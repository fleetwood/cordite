import MainLayout from 'components/ui/layouts/Main'
import React from 'react'

const ThemePage = () => {
  return (
    <MainLayout>
      <div>
        <h2 className="px-2 pb-4 text-xl font-bold">Colors</h2>

        <div className="border border-primary p-2 grid grid-cols-2 gap-4">
          <div className="col-span-1 grid grid-cols-3">
            <div className="col-span-3 font-mono text-2xl bg-primary text-primary-content my-2">
              Cordite Light
            </div>

            <div>Primary</div>
            <div className="font-mono">#584B4B</div>
            <div className="w-20px bg-[#584B4B]"></div>

            <div>Secondary</div>
            <div className="font-mono">#424143</div>
            <div className="w-20px bg-[#424143]"></div>

            <div>Accent</div>
            <div className="font-mono">#1081B4</div>
            <div className="w-20px bg-[#1081B4]"></div>

            <div>Neutral</div>
            <div className="font-mono">#372F2F</div>
            <div className="w-20px bg-[#372F2F]"></div>

            <div>Base-100</div>
            <div className="font-mono">#D9D4D1</div>
            <div className="w-20px bg-[#D9D4D1]"></div>

            <div>Info</div>
            <div className="font-mono">#32C4C0</div>
            <div className="w-20px bg-[#32C4C0]"></div>

            <div>Success</div>
            <div className="font-mono">#01b768</div>
            <div className="w-20px bg-[#01b768]"></div>

            <div>Warning</div>
            <div className="font-mono">#FB8500</div>
            <div className="w-20px bg-[#FB8500]"></div>

            <div>Error</div>
            <div className="font-mono">#AD2325</div>
            <div className="w-20px bg-[#AD2325]"></div>
          </div>

          <div className="col-span-1 grid grid-cols-3">
            <div className="col-span-3 text-2xl font-mono bg-primary text-primary-content my-2">
              Cordite Dark
            </div>

            <div>Primary</div>
            <div className="font-mono">#BB9933</div>
            <div className="w-20px bg-[#BB9933]"></div>

            <div>Secondary</div>
            <div className="font-mono">#779911</div>
            <div className="w-20px bg-[#779911]"></div>

            <div>Accent</div>
            <div className="font-mono">#663399</div>
            <div className="w-20px bg-[#663399]"></div>

            <div>Neutral</div>
            <div className="font-mono">#334444</div>
            <div className="w-20px bg-[#334444]"></div>

            <div>Base-100</div>
            <div className="font-mono">#121212</div>
            <div className="w-20px bg-[#121212]"></div>

            <div>Info</div>
            <div className="font-mono">#77AADD</div>
            <div className="w-20px bg-[#77AADD]"></div>

            <div>Success</div>
            <div className="font-mono">#88BB66</div>
            <div className="w-20px bg-[#88BB66]"></div>

            <div>Warning</div>
            <div className="font-mono">#DD8822</div>
            <div className="w-20px bg-[#DD8822]"></div>

            <div>Error</div>
            <div className="font-mono">#882211</div>
            <div className="w-20px bg-[#882211]"></div>
          </div>
        </div>

        <h2 className="mt-8 px-2 pb-4 text-xl font-bold">Current</h2>

        <div data-theme="light" className="bg-transparent">
          <div
            className="rounded-box bg-base-100 border-base-content/5 text-base-content not-prose grid gap-3 border p-6"
            data-theme="mytheme"
          >
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
              <button className="btn">Default</button>
              <button className="btn btn-primary">Primary</button>
              <button className="btn btn-secondary">Secondary</button>
              <button className="btn btn-accent">Accent</button>
              <button className="btn btn-info">Info</button>
              <button className="btn btn-success">Success</button>
              <button className="btn btn-warning">Warning</button>
              <button className="btn btn-error">Error</button>
            </div>

            <div className="grid grid-cols-2 place-items-center gap-2 md:grid-cols-4">
              <span className="badge">Default</span>
              <span className="badge badge-primary">Primary</span>
              <span className="badge badge-secondary">Secondary</span>
              <span className="badge badge-accent">Accent</span>
              <span className="badge badge-info">Info</span>
              <span className="badge badge-success">Success</span>
              <span className="badge badge-warning">Warning</span>
              <span className="badge badge-error">Error</span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3 md:flex-row">
                <div className="md:w-1/2">
                  <div className="tabs">
                    <button className="tab tab-lifted">Tab</button>
                    <button className="tab tab-lifted tab-active">Tab</button>
                    <button className="tab tab-lifted">Tab</button>
                  </div>

                  <div className="flex flex-col">
                    <span className="link">I'm a simple link</span>
                    <span className="link link-primary">I'm a simple link</span>
                    <span className="link link-secondary">
                      I'm a simple link
                    </span>
                    <span className="link link-accent">I'm a simple link</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 md:w-1/2">
                  <progress value="20" max="100" className="progress">
                    Default
                  </progress>
                  <progress
                    value="25"
                    max="100"
                    className="progress progress-primary"
                  >
                    Primary
                  </progress>
                  <progress
                    value="30"
                    max="100"
                    className="progress progress-secondary"
                  >
                    Secondary
                  </progress>
                  <progress
                    value="40"
                    max="100"
                    className="progress progress-accent"
                  >
                    Accent
                  </progress>
                  <progress
                    value="45"
                    max="100"
                    className="progress progress-info"
                  >
                    Info
                  </progress>
                  <progress
                    value="55"
                    max="100"
                    className="progress progress-success"
                  >
                    Success
                  </progress>
                  <progress
                    value="70"
                    max="100"
                    className="progress progress-warning"
                  >
                    Warning
                  </progress>
                  <progress
                    value="90"
                    max="100"
                    className="progress progress-error"
                  >
                    Error
                  </progress>
                </div>
              </div>

              <div className="flex flex-col gap-3 md:flex-row">
                <div className="stats bg-base-300 border-base-300 border md:w-1/2">
                  <div className="stat">
                    <div className="stat-title">Total Page Views</div>

                    <div className="stat-value">89,400</div>
                    <div className="stat-desc">21% more than last month</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 md:w-1/2">
                  <div className="radial-progress">60%</div>

                  <div className="radial-progress">75%</div>

                  <div className="radial-progress">90%</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3 md:flex-row">
                <div className="md:w-1/2">
                  <div>
                    <input type="checkbox" className="toggle" />
                    <input type="checkbox" className="toggle toggle-primary" />
                    <input
                      type="checkbox"
                      className="toggle toggle-secondary"
                    />
                    <input type="checkbox" className="toggle toggle-accent" />
                  </div>
                  <div>
                    <input type="checkbox" className="checkbox" />
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                    />
                    <input
                      type="checkbox"
                      className="checkbox checkbox-secondary"
                    />
                    <input
                      type="checkbox"
                      className="checkbox checkbox-accent"
                    />
                  </div>
                  <div>
                    <input type="radio" name="radio-1" className="radio" />
                    <input
                      type="radio"
                      name="radio-1"
                      className="radio radio-primary"
                    />
                    <input
                      type="radio"
                      name="radio-1"
                      className="radio radio-secondary"
                    />
                    <input
                      type="radio"
                      name="radio-1"
                      className="radio radio-accent"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value="90"
                    className="range range-xs"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value="70"
                    className="range range-xs range-primary"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value="50"
                    className="range range-xs range-secondary"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value="40"
                    className="range range-xs range-accent"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 md:flex-row">
                <div className="flex flex-col gap-3 md:w-1/2">
                  <input
                    type="text"
                    placeholder="Default"
                    className="input input-bordered w-full"
                  />
                  <input
                    type="text"
                    placeholder="Primary"
                    className="input input-primary input-bordered w-full"
                  />
                  <input
                    type="text"
                    placeholder="Secondary"
                    className="input input-secondary input-bordered w-full"
                  />
                  <input
                    type="text"
                    placeholder="Accent"
                    className="input input-accent input-bordered w-full"
                  />
                </div>
                <div className="flex flex-col gap-3 md:w-1/2">
                  <input
                    type="text"
                    placeholder="Info"
                    className="input input-info input-bordered w-full"
                  />
                  <input
                    type="text"
                    placeholder="Success"
                    className="input input-success input-bordered w-full"
                  />
                  <input
                    type="text"
                    placeholder="Warning"
                    className="input input-warning input-bordered w-full"
                  />
                  <input
                    type="text"
                    placeholder="Error"
                    className="input input-error input-bordered w-full"
                  />
                </div>
              </div>
              <div className="navbar bg-neutral text-neutral-content rounded-box">
                <div className="flex-none">
                  <button className="btn btn-square btn-ghost">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-5 w-5 stroke-current"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="flex-1">
                  <button className="btn btn-ghost text-xl normal-case">
                    daisyUI
                  </button>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex flex-grow flex-col gap-3">
                  <div className="text-4xl font-bold">Text Size 1</div>
                  <div className="text-3xl font-bold">Text Size 2</div>
                  <div className="text-2xl font-bold">Text Size 3</div>
                  <div className="text-xl font-bold">Text Size 4</div>
                  <div className="text-lg font-bold">Text Size 5</div>
                  <div className="text-sm font-bold">Text Size 6</div>
                  <div className="text-xs font-bold">Text Size 7</div>
                </div>
                <ul className="steps steps-vertical">
                  <li className="step step-primary">Step 1</li>
                  <li className="step step-primary">Step 2</li>
                  <li className="step">Step 3</li>
                  <li className="step">Step 4</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="alert">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-info h-6 w-6 flex-shrink-0"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>12 unread messages. Tap to see.</span>
              </div>
              <div className="alert alert-info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 flex-shrink-0 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>New software update available.</span>
              </div>
              <div className="alert alert-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 flex-shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>Your purchase has been confirmed!</span>
              </div>
              <div className="alert alert-warning">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 flex-shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  ></path>
                </svg>
                <span>Warning: Invalid email address!</span>
              </div>
              <div className="alert alert-error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 flex-shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>Error! Task failed successfully.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default ThemePage
