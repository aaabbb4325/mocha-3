import { A } from '@solidjs/router'

export default function FAQ() {
  return (
    <div class="flex flex-col gap-4 p-8">
      <h1 class="-mt-2 pb-2 text-4xl font-bold">FAQ</h1>
      <div class="collapse collapse-arrow bg-base-200">
        <input type="checkbox" name="faq" />
        <div class="collapse-title text-xl font-medium">What is Mocha?</div>
        <div class="collapse-content">
          <p>Mocha is a web proxy used to unblock websites at work or school. Your traffic is encrypted so no one can read it, not even us. </p>
        </div>
      </div>

      <div class="collapse collapse-arrow bg-base-200">
        <input type="checkbox" name="faq" />
        <div class="collapse-title text-xl font-medium">How do I use it?</div>
        <div class="collapse-content">
          <p>
            Navigate to the home page and type in a URL or search query. You can also launch a preset{' '}
            <A href="/shortcuts" class="underline underline-offset-2">
              shortcut
            </A>{' '}
            or{' '}
            <A href="/game" class="underline underline-offset-2">
              game
            </A>
            .
          </p>
        </div>
      </div>

      <div class="collapse collapse-arrow bg-base-200">
        <input type="checkbox" name="faq" />
        <div class="collapse-title text-xl font-medium">Why is the proxy slow?</div>
        <div class="collapse-content">
          <p>The proxy is hosted on a shared server that serves all users. If there is a significant amount of users at one time, it can cause network congestion and slow down requests. </p>
        </div>

        
      <div class="collapse collapse-arrow bg-base-200">
        <input type="checkbox" name="faq" />
        <div class="collapse-title text-xl font-medium">Mocha 3 Unofficial Details</div>
        <div class="collapse-content">
          <p>This is a Unofficial build of Mocha which aims to restore Mochas functionality and Continue maintaining it, its called Mocha 3 Despite the fact that I can barely code and probably will add little to no features from the actual Mocha 3 [ProudParrot2 if you want this taken down DM @Myntblue or @eljahames on discord]</p>
        </div>

      <div class="collapse collapse-arrow bg-base-200">
        <input type="checkbox" name="faq" />
        <div class="collapse-title text-xl font-medium">Cola kitty pics</div>
        <div class="collapse-content">
          <p>placeholder</p>
        </div>

           
      <div class="collapse collapse-arrow bg-base-200">
        <input type="checkbox" name="faq" />
        <div class="collapse-title text-xl font-medium">Credits</div>
        <div class="collapse-content">
          <p>ProudParrot2 - OG Mocha, Bog/Truffled - Games, Bread/Genizy - Games, MyntBlue - Maintenance and Bug Fixes, ELJahames - Maintenance and paid for the domain </p>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}
