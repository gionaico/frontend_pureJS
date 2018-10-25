let footer = function(company) {
    return `<div>
    <div class="gloriaGrid">
      <div class="elem1">
        <div class="elemsTitle">
          <p>${company.name} S.L.</p>
        </div>
        <div>
          <div>${company.name}</div>
          <div>${company.address},</div>
          <div>${company.zipcode} ${company.city}, ${company.province}, ${company.country}.</div>
          <div>${company.name}@info.com</div>
          <div>${company.phone}</div>
        </div>
      </div>

      <div class="elem2">
        <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae velit aliquid expedita dolorem pariatur
              amet nemo dicta, repudiandae totam, inventore natus.</div>
      </div>

      <div class="elem3">
        <div class="elemsTitle">
          <p>MISIÓN</p>
        </div>
        <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae velit aliquid expedita dolorem pariatur
              amet nemo dicta, repudiandae totam, inventore natus.</div>
      </div>

    </div>
  </div>`;
}
export {footer};