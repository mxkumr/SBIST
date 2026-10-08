import Image from "next/image";

export function LaunchLogo() {
  return (
    <>
      <div className="launch-logo-wrap">
        <Image
          src="/images/sbist-logo.jpg"
          alt="Sree Balaji Institute of Science and Technology"
          width={220}
          height={72}
          priority
        />
      </div>

      <div className="launch-name">
        <h1>
          Sree Balaji Institute of
          <br />
          Science and Technology
        </h1>
      </div>

      <p className="launch-tagline">Official Website Launch</p>
    </>
  );
}
