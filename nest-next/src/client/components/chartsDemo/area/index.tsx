import { Area } from "@antv/g2plot"
import { useEffect } from "react";
import { data } from "./constants"

const AreaDemo: React.FC = () => {
  useEffect(() => {
    const area = new Area("area-container", {
      data,
      xField: 'timePeriod',
      yField: 'value',
      xAxis: {
        range: [0, 1],
      },
    })
    area.render();
  }, [])

  return (
    <div id="area-container"></div>
  )
}

export default AreaDemo