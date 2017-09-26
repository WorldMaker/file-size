type Spec = 'si' | 'iec' | 'jedec'
type Unit = 'B' | 'KB' | 'MB' | 'GB' | 'TB' | 'PB' | 'EB' | 'ZB' | 'YB'

interface FileSize {
    human(spec?: Spec): string
    to(unit: Unit, spec?: Spec): string
    calculate(spec?: Spec): { suffic: string, magnitude: number, result: number, fixed: string, bits: { result: number, fixed: string } }
}

declare function filesize(bytes: number, options?: { fixed: number, spacer: string }): FileSize

export = filesize
