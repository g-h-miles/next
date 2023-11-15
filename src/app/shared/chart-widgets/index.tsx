import SimpleLineChart from '@/app/shared/chart-widgets/simple-line-chart';
import CustomizedDotLineChart from '@/app/shared/chart-widgets/customized-dot-line-chart';
import SimpleBarChart from '@/app/shared/chart-widgets/simple-bar-chart';
import MixBarChart from '@/app/shared/chart-widgets/mix-bar-chart';
import CustomShapeBarChart from '@/app/shared/chart-widgets/custom-shape-bar-chart';
import BrushBarChart from '@/app/shared/chart-widgets/brush-bar-chart';
import SimpleAreaChart from '@/app/shared/chart-widgets/simple-area-chart';
import StackedAreaChart from '@/app/shared/chart-widgets/stacked-area-chart';
import SimpleRadarChart from '@/app/shared/chart-widgets/simple-radar-chart';
import RadialBarChart from '@/app/shared/chart-widgets/radial-bar-chart';
import CustomizedMixChart from '@/app/shared/chart-widgets/customized-mix-chart';

export default function ChartWidgets() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 3xl:gap-8">
      <SimpleLineChart />
      <CustomizedDotLineChart />
      <SimpleBarChart />
      <MixBarChart />
      <CustomShapeBarChart />
      <BrushBarChart />
      <SimpleAreaChart />
      <StackedAreaChart />
      <SimpleRadarChart />
      <RadialBarChart />
      <CustomizedMixChart className="lg:col-span-2" />
    </div>
  );
}
