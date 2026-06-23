const StickSlipTable = () => {
  return (
    <>
      <div className="md:flex justify-start items-start gap-5 px-10 mt-20">
        <div className='bg-[#f59551] h-[200px] w-[20%]'>
          <h5 className="px-5 font-bold py-3">Cylinder Wires</h5>
        </div>
        <div>
          <ul className="text-2xl">
            <li>
              A Mounting tension of 6-8 kgs has to be applied during cylinder
              wire mounting.
            </li>
            <li>
              Tension should be sufﬁcient enough to make the wire bend and sit
              straight vertically on the cylinder surface.
            </li>
            <li>No initial grinding required for cylinder wire.</li>
            <li>
              Only re-sharpening has to be done to cylinder wire in speciﬁed
              intervals using speciﬁed resharpening machines with 100's grit
              stones.
            </li>
            <li>
              Periodical replacement of Licker-in wire, Stationary flat tops,
              flat tops enhances cylinder wire life and vice versa.
            </li>
            <li>
              Different height and thickness cylinder wires require different
              mounting tension. Hence, tension varies depending on wire
              speciﬁcation.
            </li>
            <li>
              Example: 2.5 mm Height x 0.6 Thickness and 2.0mm Height x 0.4
              Thickness.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default StickSlipTable
