import vl from 'vega-lite-api';
export const viz = vl
	.markCircle({  
    size: 900, 
    opacity: .20,
  })
  .encode(
    vl.x().fieldT('DATE'),
    vl.y().fieldQ('AverageTemperature').scale({ zero: false }),
    vl.tooltip().fieldN('AverageTemperature')
  );

// .scale({ zero: false }),